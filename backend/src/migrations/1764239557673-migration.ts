import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1764239557673 implements MigrationInterface {
    name = 'Migration1764239557673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "short_name" character varying(3) NOT NULL, "description" text, "is_hidden" boolean NOT NULL DEFAULT false, "system_id" integer NOT NULL, "systemId" integer, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_49536b8b7690488b4ba4073a9c" ON "stats" ("system_id") `);
        await queryRunner.query(`ALTER TABLE "stats" ADD CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e" FOREIGN KEY ("systemId") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_49536b8b7690488b4ba4073a9c"`);
        await queryRunner.query(`DROP TABLE "stats"`);
    }

}
