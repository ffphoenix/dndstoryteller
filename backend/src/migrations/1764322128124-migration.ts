import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1764322128124 implements MigrationInterface {
    name = 'Migration1764322128124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying, "firstName" character varying, "lastName" character varying, "isActive" boolean NOT NULL DEFAULT true, "role" character varying NOT NULL DEFAULT 'user', "googleId" character varying, "pictureUrl" character varying, "provider" character varying NOT NULL DEFAULT 'local', "lastLoginAt" TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_470355432cc67b2c470c30bef7" ON "user" ("googleId") `);
        await queryRunner.query(`CREATE TABLE "systems" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, "isPublic" boolean NOT NULL DEFAULT false, "imageUrl" character varying(255), "userId" integer NOT NULL, CONSTRAINT "PK_aec3139aedeb09c5ae27f2c94d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "stats" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "shortName" character varying(3) NOT NULL, "description" text, "isHidden" boolean NOT NULL DEFAULT false, "order" smallint NOT NULL DEFAULT '0', "systemId" integer NOT NULL, CONSTRAINT "PK_c76e93dfef28ba9b6942f578ab1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "systems" ADD CONSTRAINT "FK_056ff5c79f666f8418064187234" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "stats" ADD CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e" FOREIGN KEY ("systemId") REFERENCES "systems"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "stats" DROP CONSTRAINT "FK_1533b0a41aa2749e3bf23ee256e"`);
        await queryRunner.query(`ALTER TABLE "systems" DROP CONSTRAINT "FK_056ff5c79f666f8418064187234"`);
        await queryRunner.query(`DROP TABLE "stats"`);
        await queryRunner.query(`DROP TABLE "systems"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_470355432cc67b2c470c30bef7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
