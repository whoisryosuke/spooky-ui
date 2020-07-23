import { html } from 'lit-html';
import { css } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';

export function ThemeProvider() {
  const styles = [
    css`
      :host {
        /* Spacing */
        /* Required for any spacing props (padding, margin) */
        --spky-spacing: 8px;
        --spky-spacing-0: 0px;
        --spky-spacing-1: 4px;
        --spky-spacing-2: 8px;
        --spky-spacing-3: 16px;
        --spky-spacing-4: 32px;
        --spky-spacing-5: 64px;
        --spky-spacing-6: 128px;
        --spky-spacing-7: 256px;
        --spky-spacing-8: 512px;

        /* Typography */
        /* Font Sizing */
        /* Required for any typography props (font-size) */
        --spky-font-sizes: 16px;
        --spky-font-sizes-0: 10px;
        --spky-font-sizes-1: 12px;
        --spky-font-sizes-2: 16px;
        --spky-font-sizes-3: 20px;
        --spky-font-sizes-4: 24px;
        --spky-font-sizes-5: 28px;
        --spky-font-sizes-6: 32px;
        --spky-font-sizes-7: 36px;
        --spky-font-sizes-8: 48px;
        --spky-font-sizes-9: 60px;

        /* Colors */
        /* None of these names are required. Just here as example. */
        /* Use any color names you'd like, even separated by dashes  */
        --spky-colors-white: #fefefe;
        --spky-colors-black: #010101;
        --spky-colors-gray-10: #f6f6f9;
        --spky-colors-gray-30: #d3d7da;
        --spky-colors-red: #db2828;
        --spky-colors-orange: #f2711c;
        --spky-colors-yellow: #fbbd08;
        --spky-colors-green: #21ba45;
        --spky-colors-blue: #2185d0;
        --spky-colors-violet: #6435c9;
        --spky-colors-primary: blue;
        --spky-colors-secondary: #6d59f0;

        --spky-colors-text: var(--spky-colors-black);
        --spky-colors-text-inverted: var(--spky-colors-white);
        --spky-colors-bg: var(--spky-colors-white);
        --spky-colors-muted: var(--spky-colors-gray-10);
        --spky-colors-highlight: hsla(205, 100%, 40%, 0.125);
        --spky-colors-disabled: rgba(40, 40, 40, 0.3);
        --spky-colors-disabled-inverted: rgba(225, 225, 225, 0.3);
      }
    `,
  ];

  useConstructableStylesheets(this, styles);

  return html` <slot></slot> `;
}
