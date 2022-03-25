import { makeObservable, observable } from 'mobx';
import Abstract from './abstract';

export class Blank extends Abstract {
  @observable sites: any = [];

  constructor(inRoot) {
    super(inRoot);
    makeObservable(this);
  }
}
