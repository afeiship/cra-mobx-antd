import { makeObservable, observable } from 'mobx';

export class RootStore {
  @observable hello = 'world';

  constructor() {
    makeObservable(this);
  }
}
