import { html } from 'lit-html';
import { css, unsafeCSS } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';
import { convertProps } from 'utility-props';

const namespace = 'spky';

function createUtilityStyles(props) {
  let styles = css``;
  const cssProperties = Object.keys(props);
  if (cssProperties && cssProperties.length > 0) {
    cssProperties.forEach(cssProperty => {
      const conversion = convertProps(cssProperty);
      if (props[cssProperty] !== undefined) {
        const propValue = conversion(props[cssProperty], namespace);
        styles = css`${styles}\n${unsafeCSS(`${cssProperty}:`)} ${unsafeCSS(
          propValue
        )};`;
      }
    });
  }
  return css`
    /* tslint-disable-next-line */
    :host {
      ${styles}
    }
  `;
}

export function Button({ type, color, width, height, margin }) {
  const styles = [
    createUtilityStyles({
      width,
      height,
      color,
      margin,
    }),
    css`
      button {
        width: 100%;
      }
    `,
  ];

  useConstructableStylesheets(this, styles);

  return html`
    <button type=${type || 'button'}>
      <slot></slot>
    </button>
  `;
}

Button.observedAttributes = [
  'type',
  'color',
  'width',
  'min-width',
  'max-width',
  'height',
  'max-height',
  'min-height',
  'padding',
  'margin',
  'font-size',
  'text-align',
];
