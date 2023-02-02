import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Widget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  amount: number;

  @Column()
  action: string;

  @Column()
  active: boolean;

  @Column()
  linked: boolean;

  @Column()
  selectedColor: string;
}
