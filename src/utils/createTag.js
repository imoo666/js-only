export function defineCustomElement(tagName, html) {
  class CustomElement extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: "open" });
      shadow.innerHTML = html;
    }
  }

  customElements.define(tagName, CustomElement);
}
