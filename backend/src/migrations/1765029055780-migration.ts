import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1765029055780 implements MigrationInterface {
  name = 'Migration1765029055780';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "lastLoginAt"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "refreshToken" character varying NOT NULL DEFAULT ''`);
    await queryRunner.query(`ALTER TABLE "user" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
    await queryRunner.query(`ALTER TABLE "user" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdAt"`);
    await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "refreshToken"`);
    await queryRunner.query(`ALTER TABLE "user" ADD "lastLoginAt" TIMESTAMP`);
  }
}
