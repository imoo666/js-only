import { ImooElement } from "../../../../class/ImooElement";
import html from "./index.html?raw";
import { listenMessage } from "../../../../utils/dispatchMessage";

class CustomElement extends ImooElement {
  #data;
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html;

    this.setupData();
    this.setupEventListeners();
  }

  setupData() {
    this.#data = 0;
    const dom = this.shadowRoot.querySelector("#number");
    dom.innerHTML = this.#data;
  }

  setupEventListeners() {
    listenMessage("dataChanged", () => {
      const dom = this.shadowRoot.querySelector("#number");
      dom.innerHTML = ++this.#data;
    });
  }
}

customElements.define("index-footer", CustomElement);
