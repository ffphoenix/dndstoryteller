import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, SwaggerDocumentOptions } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';
import { writeFileSync } from 'fs';
import * as process from 'node:process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  if (process.env.APP_ENV === 'dev') {
    setupOpenAPI(app);
  }
  await app.listen(3000);
}
bootstrap();

function setupOpenAPI(app:INestApplication) {
  console.log('Setup OpenAPI');
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setVersion('1.0')
    .addTag('api')
    .build();

  const options: SwaggerDocumentOptions =  {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };

  const document = SwaggerModule.createDocument(app, config, options);
  writeFileSync('./openapi-schema.json', JSON.stringify(document, null, 2));

  SwaggerModule.setup('openapi', app, document, { useGlobalPrefix: true, raw: ['json'] });
}
