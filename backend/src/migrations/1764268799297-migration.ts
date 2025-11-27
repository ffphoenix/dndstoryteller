import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1764268799297 implements MigrationInterface {
    name = 'Migration1764268799297'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "shortName" character varying(3) NOT NULL, "description" text, "isHidden" boolean NOT NULL DEFAULT false, "order" smallint NOT NULL DEFAULT '0', "systemId" integer, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "stats" ADD CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e" FOREIGN KEY ("systemId") REFERENCES "systems"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e"`);
        await queryRunner.query(`DROP TABLE "stats"`);
    }

}
