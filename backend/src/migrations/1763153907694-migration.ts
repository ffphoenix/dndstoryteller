import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1763153907694 implements MigrationInterface {
  name = 'Migration1763153907694';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_user_email_unique"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_user_googleId"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "role" character varying NOT NULL DEFAULT 'user'`);
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "user" ("email") `);
    await queryRunner.query(`CREATE INDEX "IDX_470355432cc67b2c470c30bef7" ON "user" ("googleId") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP INDEX "public"."IDX_470355432cc67b2c470c30bef7"`);
    await queryRunner.query(`DROP INDEX "public"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "role"`);
    await queryRunner.query(`CREATE INDEX "IDX_user_googleId" ON "user" ("googleId") `);
    await queryRunner.query(`CREATE UNIQUE INDEX "IDX_user_email_unique" ON "user" ("email") `);
  }
}
