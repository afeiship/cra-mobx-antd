import { observable } from 'mobx';

export default class {
  @observable modals = {};

  constructor(root) {
    this.root = root;
  }

  @action
  present(inName, inData) {
    this.modals[inName] = { visible: true, data: inData };
  }

  @action
  dismiss(inName) {
    this.modals[inName] = { visible: false, data: null };
  }
}
