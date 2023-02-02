import { createOrmConfig } from "../src/ormconfig";
import { DataSource } from "typeorm";

beforeAll(async () => {
  await setUpDb();
});

async function setUpDb() {
  const ormConfig = createOrmConfig();
  const ds = new DataSource(ormConfig);
  await ds.initialize()
  await ds.createQueryRunner().clearDatabase(ormConfig.database as string);
  await ds.runMigrations({ transaction: 'all' });
  await ds.destroy();
}
