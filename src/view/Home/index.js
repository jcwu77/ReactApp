import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ChildThree from "./ChildThree";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import MobxTest from "./MobxTest";

import { testApi } from "./api";

import { observer, inject } from "mobx-react/custom";

import styles from "./index.module.less";
@inject("DemoStore")
@observer
class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }

  async componentDidMount() {
    const { DemoStore } = this.props;
    DemoStore.setToken(
      "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNTk2NzU4MTE2MSIsImNyZWF0ZWQiOjE1NzA2ODkyOTI0NDYsImV4cCI6MTU3MTI5NDA5Mn0.gM3ycaLPPixkq4bu0SM_wLeCw8THpno3SkQQF8V_XToRJe8TP9Ff-sjHh8eb7Ar8bk9E10GV7TQRq-Fsgva2_Q"
    );
    const res = await testApi();
    DemoStore.setData(res.data);

    // console.log(res);
  }

  render() {
    const { DemoStore } = this.props;
    const { resData } = DemoStore;
    return (
      <>
        <h1>mobile: {resData.mobile}</h1>
        <ul>
          <div className={styles.title}>子路由测试</div>
          <Link to="/home/child_one">跳转子路由1</Link>
          <Link to="/home/child_two">跳转子路由2</Link>
          <Link to="/home/child_three">跳转子路由3</Link>
        </ul>
        <Switch>
          <Route path="/home/child_one" component={ChildOne} />
          <Route path="/home/child_two" component={ChildTwo} />
          <Route path="/home/child_three" component={ChildThree} />
        </Switch>

        <ul>
          <div className={styles.title}>mobx测试</div>
          <Link to="/home/mobx">mobx</Link>
        </ul>
        <Switch>
          <Route path="/home/mobx" component={MobxTest} />
        </Switch>
      </>
    );
  }
}

export default Home;
