const routes = ["app", "home"];
// 给每个route都新建一个文件夹，把index.html拷贝进去
const fs = require("fs-extra");
const path = require("path");
routes.forEach((route) => {
  fs.copySync(
    path.join("build", "index.html"),
    path.join("build", route, "index.html")
  );
  fs.copySync(path.join("build", "index.html"), path.join("build", "404.html"));
});
