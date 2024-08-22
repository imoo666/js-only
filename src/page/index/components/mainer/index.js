import html from "./index.html?raw";
import { dispatchMessage } from "../../../../utils/dispatchMessage";
import { message } from "../../../../utils/message";
import { ImooElement } from "../../../../class/ImooElement";

export class PageIndex extends ImooElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html;
  }

  handleClickButton() {
    message("点击了页脚");
    dispatchMessage("dataChanged");
  }
}

customElements.define("index-mainer", PageIndex);
