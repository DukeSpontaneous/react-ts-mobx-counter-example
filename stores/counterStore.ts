import { makeAutoObservable } from 'mobx';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  decrease = () => {
    this.count--;
  };

  increase = () => {
    this.count++;
  };
}
const counterStore = new CounterStore();

export default counterStore;
