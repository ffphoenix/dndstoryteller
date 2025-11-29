import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1764349671511 implements MigrationInterface {
  name = 'Migration1764349671511';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "system_stats" RENAME COLUMN "order" TO "displayOrder"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "system_stats" RENAME COLUMN "displayOrder" TO "order"`);
  }
}
