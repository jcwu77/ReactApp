/*
 * @LastEditors: wjc
 * @Description: In User Settings Edit
 * @Author: wjc
 * @Date: 2019-08-16 19:22:34
 * @LastEditTime: 2019-08-16 19:24:16
 */
import React from "react";
import { Switch, Route } from "react-router-dom";
import Demo from "./Demo";

const Routes = () => {
  return (
    <Switch>
      <Route path="/demo" component={Demo} />
    </Switch>
  );
};

export default Routes;
