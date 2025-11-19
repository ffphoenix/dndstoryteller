import { MigrationInterface, QueryRunner } from "typeorm";

export class Migration1763465249586 implements MigrationInterface {
    name = 'Migration1763465249586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "systems" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "description" text, "user_id" integer NOT NULL, "is_public" boolean NOT NULL DEFAULT false, "image_url" character varying(255), "userId" integer, CONSTRAINT "PK_aec3139aedeb09c5ae27f2c94d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_f0e8359cf9ecde7a28c22e6913" ON "systems" ("name") `);
        await queryRunner.query(`CREATE INDEX "IDX_130495a57a15ea8dc7d2259854" ON "systems" ("user_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_f9bc9e3838f31092ab1afc757a" ON "systems" ("is_public") `);
        await queryRunner.query(`ALTER TABLE "systems" ADD CONSTRAINT "FK_056ff5c79f666f8418064187234" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "systems" DROP CONSTRAINT "FK_056ff5c79f666f8418064187234"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f9bc9e3838f31092ab1afc757a"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_130495a57a15ea8dc7d2259854"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_f0e8359cf9ecde7a28c22e6913"`);
        await queryRunner.query(`DROP TABLE "systems"`);
    }

}
