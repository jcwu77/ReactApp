import { observable, action, reaction, computed } from "mobx";

class DemoStore {
  @observable count = 0;
  @observable token = 111;
  @observable resData = {};

  @computed get total() {
    return 112 * this.count;
  }

  constructor() {
    reaction(
      () => this.token,
      token => {
        if (token) {
          localStorage.setItem("token", token);
        } else {
          localStorage.removeItem("token");
        }
      }
    );
  }

  @action addCount = () => {
    this.count++;
  };

  @action deleteCount = () => {
    this.count--;
  };

  @action setToken(token) {
    this.token = token;
  }

  @action setData(data) {
    this.resData = data;
  }
}

export default new DemoStore();
