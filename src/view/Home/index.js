import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import ChildThree from "./ChildThree";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

import { testApi } from "./api";

import styles from "./index.module.less";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  async componentDidMount() {
    const res = await testApi();
    // console.log(res);
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Home;
