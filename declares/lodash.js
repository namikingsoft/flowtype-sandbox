declare module "lodash" {
  declare class Lodash {
    map<T>(list: Array<T>, func: Function): Array<T>
  }

  declare var exports: Lodash;
}
