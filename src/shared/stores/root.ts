import { makeObservable, observable } from 'mobx';
import { Blank } from '@/shared/stores/blank';

export class RootStore {
  @observable busy = false;
  private wather;

  public blank;

  constructor() {
    makeObservable(this);
    this.blank = new Blank(this);
    this.wather = new nx.UrlWatcher({ immediate: true });
    this.initUrlWatcher();
  }

  initUrlWatcher = () => {
    this.wather.watch((old, current) => {
      this.busy = false;
    });
  };
}
