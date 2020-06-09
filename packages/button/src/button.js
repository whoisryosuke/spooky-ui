import { html } from "lit-html";
import { component } from "haunted";

export function Button({ type }) {
  return html`
    <button type=${type ? type : "button"}>
      <slot></slot>
    </button>
  `;
}

Button.observedAttributes = ["type"];

customElements.define("spooky-button", component(Button));
