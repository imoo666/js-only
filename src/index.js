import { iconMap } from "./constants/icons.js";
import { defineCustomElement } from "./utils/createTag";

// 注册主页
import("./page/index");

// 注册 icon
Object.entries(iconMap).forEach(([key, value]) => {
  defineCustomElement(key, value.replace(`width="200" height="200"`, ""));
});

// 注册组件
import("./components/mask");
import("./components/message");
