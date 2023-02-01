export default interface Widget {
  readonly id: number,
  readonly type: string,
  readonly amount: number,
  readonly action: string,
  readonly active: boolean,
  readonly linked: boolean,
  readonly selectedColor: SelectableColor
};

export const SelectableColor = {
  white: 'white',
  black: 'black',
  blue: 'blue',
  green: 'green',
  beige: 'beige'
} as const;

export type SelectableColor = typeof SelectableColor[keyof typeof SelectableColor];
