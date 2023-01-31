export default interface Widget {
  readonly id: number,
  readonly type: string,
  readonly amount: number,
  readonly action: string,
  readonly active: boolean,
  readonly linked: boolean,
  readonly selectedColor: string
}
