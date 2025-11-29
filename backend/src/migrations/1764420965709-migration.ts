import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1764420965709 implements MigrationInterface {
  name = 'Migration1764420965709';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "system_skills" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text NOT NULL, "check" text, "action" text, "tryAgain" text, "systemId" integer NOT NULL, CONSTRAINT "PK_0d3212120f4ecedf90864d7e298" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "system_skills" ADD CONSTRAINT "FK_e9dbf3245d91962e1ef6bb8076a" FOREIGN KEY ("systemId") REFERENCES "systems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "system_skills" DROP CONSTRAINT "FK_e9dbf3245d91962e1ef6bb8076a"`);
    await queryRunner.query(`DROP TABLE "system_skills"`);
  }
}
