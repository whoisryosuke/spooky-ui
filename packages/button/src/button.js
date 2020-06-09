import { html } from "lit-html";
import { css, unsafeCSS } from "lit-element";
import { component } from "haunted";
import { useConstructableStylesheets } from "spooky-ui-hooks";

export function Button({ type, color }) {
  const styles = [
    css`
      button {
        color: ${color ? unsafeCSS(color) : "red"};
      }
    `,
  ];

  useConstructableStylesheets(this, styles);

  return html`
    <button type=${type ? type : "button"}>
      <slot></slot>
    </button>
  `;
}

Button.observedAttributes = ["type", "color"];

customElements.define("spooky-button", component(Button));
