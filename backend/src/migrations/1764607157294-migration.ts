import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1764607157294 implements MigrationInterface {
  name = 'Migration1764607157294';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "system_spells" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, "school" character varying(255), "subschool" character varying(255), "level" character varying(50), "range" character varying(255), "duration" character varying(255), "systemId" integer NOT NULL, CONSTRAINT "PK_04e921d90525989e9127c45064d" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "system_spells" ADD CONSTRAINT "FK_7e7c1397cb3559f76f7ecd0974a" FOREIGN KEY ("systemId") REFERENCES "systems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "system_spells" DROP CONSTRAINT "FK_7e7c1397cb3559f76f7ecd0974a"`);
    await queryRunner.query(`DROP TABLE "system_spells"`);
  }
}
