import { useState, useEffect } from "react";
import "./App.css";
// import E from 'wangeditor'
// import { fabric } from "fabric";
const AV = require("leancloud-storage");

var APP_ID = "9OV7cwtal2L1HlNKdRXKAOuW-gzGzoHsz"; // 注意 此处的ID和KEY每个人每个库是不一样的
var APP_KEY = "iCr9BQeeDsix6utqygLlYr8G"; // 请复制你对应的代码
var serverURL = "https://9ov7cwta.lc-cn-n1-shared.com"; // 绑定的api域名
AV.init({
  appId: APP_ID,
  appKey: APP_KEY,
  serverURL
});

function App() {
  const [myuser, setmyuser] = useState();
  const [mypassword, setmypassword] = useState();
  // useEffect(() => {
  //   const editor = new E('#div1')
  //   editor.create()

  //   var canvas = new fabric.Canvas('canvas');

  //   var rect = new fabric.Rect({
  //     top: 100,
  //     left: 100,
  //     width: 60,
  //     height: 70,
  //     fill: 'red'
  //   });

  //   canvas.add(rect);
  // }, [])

  return (
    <div className="App">
      <div id="div1"></div>
      <canvas id="canvas" width="300" height="300"></canvas>
      <div style={{ background: "#fff" }} contentEditable={true}>
        测试测试测试测试测试测试测试测试测试测试测试测试测试测试
      </div>
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href=" https://www.jianshu.com/p/ca15f3314456">leancloud使用指南</a>
        <input
          onChange={(v) => {
            setmyuser(v.target.value);
          }}
          placeholder="myuser"
        />
        <br />
        <input
          onChange={(v) => {
            setmypassword(v.target.value);
          }}
          placeholder="mypassword"
        />

        <button
          onClick={() => {
            let user = new AV.User();
            user.setUsername(myuser);
            user.setPassword(mypassword);
            user.signUp().then(
              (loginedUser) => {
                console.log(loginedUser);
              },
              (error) => {
                console.log(error);
              }
            );
          }}
        >
          sign up
        </button>
        <button
          onClick={() => {
            AV.User.logIn("admin", "123456a")
              .then((loginedUser) => {
                console.log(loginedUser);
                // return loginedUser.save();
              })
              .catch(function (error) {
                // 异常处理
                console.error(error);
              });
          }}
        >
          login
        </button>
        <button
          onClick={() => {
            var currentUser = AV.User.current();
            console.log(currentUser, "---");
          }}
        >
          获取用户对象
        </button>
        <button
          onClick={() => {
            AV.User.logOut();
            var currentUser = AV.User.current();
            console.log(currentUser, "---currentUser");
          }}
        >
          登出
        </button>
        <button
          onClick={() => {
            console.log("click me");
            console.log(AV, "------");

            var TestObject = AV.Object.extend("TestObject");
            var testObject = new TestObject();
            testObject
              .save({
                words: "Hello World!"
              })
              .then(function (object) {
                alert("LeanCloud Rocks!");
              });
            console.log("click over");
          }}
        >
          创建链表
        </button>
        <button
          onClick={() => {
            const query = new AV.Query("TestObject");
            console.log(query, "-------");

            query.get("6103aaff1de21d3e072dd58a").then((todo) => {
              // todo 就是 objectId 为 582570f38ac247004f39c24b 的 Todo 实例
              console.log(todo, "--todo---");
            });
          }}
        >
          获取数据
        </button>
      </header>
    </div>
  );
}

export default App;
