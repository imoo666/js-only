export class ImooElement extends HTMLElement {
  connectedCallback() {
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    this.shadowRoot?.querySelectorAll("[onImooClick]").forEach((element) => {
      const onClickValue = element.getAttribute("onImooClick");
      if (onClickValue) {
        const handler = this[onClickValue];
        if (typeof handler === "function") {
          element.addEventListener("click", (event) =>
            handler.call(this, event)
          );
        }
      }
    });
  }
}
