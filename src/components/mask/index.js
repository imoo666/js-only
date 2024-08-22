import { ImooElement } from "../../class/ImooElement";
import html from "./index.html?raw";

class Index extends ImooElement {
  #overlay = null;

  static get observedAttributes() {
    return ["show"];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = html;

    this.#overlay = shadow.querySelector("#overlay");
  }

  attributeChangedCallback(name, _, newValue) {
    if (name === "show") {
      if (newValue === "true") {
        this.showMask();
      } else {
        this.hideMask();
      }
    }
  }

  handleClickOverlay() {
    if (this.getAttribute("closable") === "true") {
      this.hideMask();
    }
  }

  handleClickSlot(event) {
    event.stopPropagation();
  }

  showMask() {
    if (this.#overlay) {
      this.#overlay.style.display = "flex";
    }
  }

  hideMask() {
    if (this.#overlay) {
      this.#overlay.style.display = "none";
    }
  }
}

customElements.define("components-mask", Index);
