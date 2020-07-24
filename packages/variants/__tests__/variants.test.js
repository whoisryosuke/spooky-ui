import { expect } from '@open-wc/testing';
import { sizeVariants } from '../src/index.js';

describe('variants', () => {
  it('should return CSS Stylesheet', () => {
    const styles = sizeVariants('0');
    expect(typeof styles).to.equal(typeof {});
  });
});
