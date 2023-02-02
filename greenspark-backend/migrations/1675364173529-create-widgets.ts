import { MigrationInterface, QueryRunner } from "typeorm";

export class createWidgets1675364173529 implements MigrationInterface {
    name = 'createWidgets1675364173529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "widget" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "amount" integer NOT NULL, "action" character varying NOT NULL, "active" boolean NOT NULL, "linked" boolean NOT NULL, "selected_color" character varying NOT NULL, CONSTRAINT "PK_feb5fda4f8d30bbe0022f4ca804" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "widget"`);
    }

}
