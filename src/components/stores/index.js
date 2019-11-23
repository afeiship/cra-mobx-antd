import { configure } from 'mobx';
import Dashboard from './dashboard';

class Store {
  constructor() {
    this.dashboard = new Dashboard(this);
  }
}

export default new Store();
