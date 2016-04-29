declare module "lodash" {
  declare class Lodash {
    map<T>(list: Array<T>, func: (x:T)=>T): Array<T>
  }

  declare var exports: Lodash
}
