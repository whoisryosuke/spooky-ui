import { html } from 'lit-html';
import {
  addParameters,
  addDecorator,
  setCustomElements,
} from '@open-wc/demoing-storybook';
import '../packages/theme/theme-provider.js';

const ThemeDecorator = storyFn =>
  html`<spooky-theme>${storyFn()}</spooky-theme>`;

addDecorator(ThemeDecorator);

addParameters({
  docs: {
    iframeHeight: '200px',
  },
});

// async function run() {
//   const customElements = await (
//     await fetch(new URL('../custom-elements.json', import.meta.url))
//   ).json();

//   setCustomElements(customElements);
// }

// run();
