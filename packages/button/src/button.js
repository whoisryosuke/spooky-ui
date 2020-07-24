import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { css } from 'lit-element';
import { useConstructableStylesheets } from 'spooky-ui-hooks';
import { createUtilityStyles } from 'spooky-ui-core';
import { sizeVariants, colorVariants, stateVariants } from 'spooky-ui-variants';

export function Button({
  type,
  title,
  ariaLabel,
  ariaLabelledby,
  color,
  width,
  height,
  margin,
  size,
  variant,
}) {
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
    <button
      title=${ifDefined(title)}
      type=${type || 'button'}
      aria-label=${ifDefined(ariaLabel)}
      aria-labelledby=${ifDefined(ariaLabelledby)}
      variant=${ifDefined(variant)}
      size=${ifDefined(size)}
    >
      <slot></slot>
    </button>
  `;
}

Button.observedAttributes = [
  // Button Specific
  'type',
  'title',
  'aria-label',
  'aria-labelledby',

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
