import { DataSource } from "typeorm";
import { createOrmConfig } from "../src/ormconfig";
import Widget from "../src/widgets/widget.entity";

const data = [
  {
    "id": 1,
    "type": "plastic bottles",
    "amount": 100,
    "action": "collects",
    "active": true,
    "linked": false,
    "selectedColor": "blue"
  },
  {
    "id": 2,
    "type": "trees",
    "amount": 10,
    "action": "plants",
    "active": false,
    "linked": true,
    "selectedColor": "green"
  },
  {
    "id": 3,
    "type": "carbon",
    "amount": 100,
    "action": "offsets",
    "active": false,
    "linked": false,
    "selectedColor": "beige"
  }
];

async function init() {
  const dataSource = new DataSource(createOrmConfig());
  await dataSource.initialize();

  console.log('Datasource initalized');

  const widgetRepository = await dataSource.getRepository(Widget);
  await widgetRepository.clear();

  console.log('Widgets cleared');

  const res = await widgetRepository.insert(data);

  console.log(res.identifiers.length + ' widgets inserted');

  await dataSource.destroy();
}

init();
