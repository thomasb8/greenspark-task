import { DataSource } from "typeorm";
import { createOrmConfig } from "../src/ormconfig";
import Widget from "../src/widgets/widget.entity";
import { fakeData } from "./data";

async function init() {
  const dataSource = new DataSource(createOrmConfig());
  await dataSource.initialize();

  console.log('Datasource initalized');

  const widgetRepository = await dataSource.getRepository(Widget);
  await widgetRepository.clear();

  console.log('Widgets cleared');

  const res = await widgetRepository.insert(fakeData);

  console.log(res.identifiers.length + ' widgets inserted');

  await dataSource.destroy();
}

init();
