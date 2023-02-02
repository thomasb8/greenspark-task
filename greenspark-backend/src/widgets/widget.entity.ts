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

export const SelectableColor = {
  white: 'white',
  black: 'black',
  blue: 'blue',
  green: 'green',
  beige: 'beige'
} as const;

export const OrderedColors = [
  SelectableColor.blue,
  SelectableColor.green,
  SelectableColor.beige,
  SelectableColor.white,
  SelectableColor.black
];
