import { MigrationInterface, QueryRunner } from "typeorm";

export class AddGoogleAuthFieldsToUser1731010000000 implements MigrationInterface {
    name = 'AddGoogleAuthFieldsToUser1731010000000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Make some existing columns nullable to support OAuth users
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "firstName" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastName" DROP NOT NULL`);

        // Add new columns
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "googleId" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "pictureUrl" character varying`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "provider" character varying NOT NULL DEFAULT 'local'`);
        await queryRunner.query(`ALTER TABLE "user" ADD COLUMN "lastLoginAt" TIMESTAMP`);

        // Add indexes/constraints
        // unique email index if not already present
        try {
            await queryRunner.query(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_user_email_unique" ON "user" ("email")`);
        } catch (_) {
            // ignore if not supported by this Postgres version
        }
        await queryRunner.query(`CREATE INDEX IF NOT EXISTS "IDX_user_googleId" ON "user" ("googleId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Drop indexes
        try {
            await queryRunner.query(`DROP INDEX IF EXISTS "IDX_user_googleId"`);
            await queryRunner.query(`DROP INDEX IF EXISTS "IDX_user_email_unique"`);
        } catch (_) {
            // ignore
        }

        // Drop columns
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastLoginAt"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "provider"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "pictureUrl"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "googleId"`);

        // Revert nullability
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "lastName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "firstName" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "password" SET NOT NULL`);
    }
}
