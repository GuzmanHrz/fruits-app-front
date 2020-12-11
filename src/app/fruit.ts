export interface Fruit {
  id   : number
  name : string,
  size : Size,
  color: string
}

enum Size {
  small,
  medium,
  large
}
