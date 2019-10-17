import { observable, action, reaction, computed, flow } from "mobx";
import { testApi } from "../api/demo";

class DemoStore {
  @observable count = 0;
  @observable token = 111;
  @observable resData = {};
  @observable pending = true;

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

  getUserInfo = flow(function*() {
    // <- 注意*号，这是生成器函数！
    this.githubProjects = [];
    this.state = "pending";
    try {
      const res = yield testApi(); // 用 yield 代替 await
      this.resData = res.data;
      this.pending = false;
    } catch (error) {
      this.resData = {};
    }
  });

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
