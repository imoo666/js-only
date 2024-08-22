import { ImooElement } from "../../class/ImooElement";
import html from "./index.html?raw";

class PageIndex extends ImooElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html;
  }
}

customElements.define("components-message", PageIndex);
