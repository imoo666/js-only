import html from "./index.html?raw";

import("./components/mainer");
import("./components/footer");

export class PageIndex extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html;
  }
}

customElements.define("page-index", PageIndex);
