import { observable, action } from 'mobx';

export default class {
  @observable id = Math.random();

  constructor(root) {
    this.root = root;
  }

  @action
  changeToAbc() {
    this.id = 'abc';
  }
}
