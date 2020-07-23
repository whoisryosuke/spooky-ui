import { html } from 'lit-html';
import { css } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';
import { createUtilityStyles } from 'spooky-ui-core';
import { sizeVariants, colorVariants, stateVariants } from 'spooky-ui-variants';

export function Button({ type, color, width, height, margin, size, variant }) {
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
    colorVariants(variant),
    stateVariants(variant),
    sizeVariants(size),
  ];

  useConstructableStylesheets(this, styles);

  return html`
    <button type=${type || 'button'} variant=${variant} size=${size}>
      <slot></slot>
    </button>
  `;
}

Button.observedAttributes = [
  // Button Specific
  'type',

  // Utility Props
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

  // Variants
  'size',
  'variant',
];
