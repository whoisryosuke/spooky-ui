import { unsafeCSS } from 'lit-element';

export function createMediaQuery(breakpoint) {
  return `@media only screen and (min-width: ${unsafeCSS(breakpoint)})`;
}
