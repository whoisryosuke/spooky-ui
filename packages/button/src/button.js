import { html } from 'lit-html';
import { css, unsafeCSS } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';
import { convertProps } from 'utility-props';

const namespace = 'spky';

function createMediaQuery(breakpoint) {
  return `@media only screen and (min-width: ${unsafeCSS(breakpoint)})`;
}

function createUtilityStyles(
  props,
  breakpoints = ['400px', '800px', '1200px']
) {
  let styles = css``;
  let responsiveStyles = css``;
  const cssProperties = Object.keys(props);
  if (cssProperties && cssProperties.length > 0) {
    cssProperties.forEach(cssProperty => {
      const conversion = convertProps(cssProperty);
      if (props[cssProperty] !== undefined) {
        // Handle array-based props
        if (
          Array.isArray(props[cssProperty]) &&
          props[cssProperty].length > 0
        ) {
          props[cssProperty].forEach((responsiveProp, propIndex) => {
            const propValue = conversion(responsiveProp, namespace);
            // Generate a CSS media query based on array index
            responsiveStyles = css`${responsiveStyles}\n ${unsafeCSS(
              createMediaQuery(breakpoints[propIndex])
            )} {\n :host {\n ${unsafeCSS(`${cssProperty}`)}: ${unsafeCSS(
              propValue
            )}; \n} \n}`;
          });
        }

        // Handle non-responsive props
        let propValue;
        // We assign the lowest breakpoint as a backup property
        // If the media queries override, they worked!
        // If not, the component defaults to a "mobile-friendly" setting
        if (
          Array.isArray(props[cssProperty]) &&
          props[cssProperty].length > 0
        ) {
          propValue = conversion(props[cssProperty][0], namespace);
        } else {
          propValue = conversion(props[cssProperty], namespace);
        }

        styles = css`${styles}\n${unsafeCSS(`${cssProperty}:`)} ${unsafeCSS(
          propValue
        )};`;
      }
    });
  }
  return css`
    :host {
      display: block;
      ${styles}
    }
    ${responsiveStyles}
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
        font-family: inherit;
        font-weight: inherit;
        color: inherit;
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
