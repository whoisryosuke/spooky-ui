import { html } from 'lit-html';
import { css } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';
import { createUtilityStyles } from 'spooky-ui-core';

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
