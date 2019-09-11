import React from "react";
import { observable } from "mobx";
import { observer } from "mobx-react/custom";

import styles from "./index.module.less";

@observer
class MobxTest extends React.Component {
  @observable count = 0;

  handleAdd = () => {
    this.count++;
  };

  handleDelete = () => {
    this.count--;
  };

  render() {
    console.log(this.count);
    return (
      <div className={styles.container}>
        <span onClick={this.handleAdd}>增加</span>
        {this.count}
        <span onClick={this.handleDelete}>减少</span>
      </div>
    );
  }
}

export default MobxTest;
