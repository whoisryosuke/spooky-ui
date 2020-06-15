import { html } from 'lit-html';
import '../button.js';

export default {
  title: 'Button',
};

export const Type = () =>
  html`<spooky-button type="submit">Submit</spooky-button>`;

export const Color = () =>
  html`<spooky-button type="submit" color="blue">Submit</spooky-button>`;

export const Margin = () =>
  html`<spooky-button type="submit" .margin=${3}>Submit</spooky-button>`;

export const ResponsiveWidth = () =>
  html`<spooky-button type="submit" .width=${['100%', '50%']}
    >Submit</spooky-button
  >`;
