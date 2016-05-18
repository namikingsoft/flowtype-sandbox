// @flow
export interface Action<P> {
  type: string;
  payload?: P;
  meta?: any;
  error?: Error;
}
