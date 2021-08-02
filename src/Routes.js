import React from "react";
import { Route, Switch } from "react-router-dom";
// Home.js的内容在后文
import Home from "./pages/Home";
// 假设我有App1、App2在 src/containers/ 文件夹中
import App from "./pages/App";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/app1" exact component={App} />

      {/* 路径不存在，则回到主页。 */}
      <Route component={Home} />
    </Switch>
  );
}
