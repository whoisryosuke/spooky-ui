import { html } from "lit-html";
import { css, unsafeCSS } from "lit-element";
import { component } from "haunted";
import { useConstructableStylesheets } from "spooky-ui-hooks";
import { convertProps } from "utility-props";

const namespace = "spky";

function createUtilityStyles(props) {
  let styles = css``;
  for (const cssProperty in props) {
    const conversion = convertProps(cssProperty);
    if (props[cssProperty] !== undefined) {
      const propValue = conversion(props[cssProperty], namespace);
      styles = css`${styles}\n${unsafeCSS(cssProperty + ":")} ${unsafeCSS(
        propValue
      )};`;
    }
  }
  console.log(
    "final styles",
    styles,
    css`
      :host {
        ${styles}
      }
    `
  );
  return css`
    :host {
      ${styles}
    }
  `;
}

export function Button({
  type,
  color,
  width,
  minWidth,
  maxWidth,
  height,
  maxHeight,
  minHeight,
  padding,
  margin,
  fontSize,
  textAlign,
}) {
  const styles = [
    createUtilityStyles({
      width,
      height,
      color,
      margin,
    }),
    css`
      :host {
      }

      button {
        width: 100%;
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

Button.observedAttributes = [
  "type",
  "color",
  "width",
  "min-width",
  "max-width",
  "height",
  "max-height",
  "min-height",
  "padding",
  "margin",
  "font-size",
  "text-align",
];

customElements.define("spooky-button", component(Button));
