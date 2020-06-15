import { html } from 'lit-html';
import '../button.js';

export default {
  title: 'Button',
};

export const Type = () =>
  html`<spooky-button type="submit">Submit</spooky-button>`;

export const Color = () =>
  html`<spooky-button type="submit" color="blue">Submit</spooky-button>`;
