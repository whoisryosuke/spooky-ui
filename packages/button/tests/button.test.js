import { html, fixture, expect } from '@open-wc/testing';

import '../src/button.js';

describe('SpookyButton', () => {
  it('supports slotted text', async () => {
    const el = await fixture(
      html` <spooky-button type="submit" color="blue">Submit</spooky-button> `
    );
    el.shadowRoot.to.equal('Submit');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(html`
      <spooky-button title="attribute title"></spooky-button>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html` <spooky-button></spooky-button> `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
