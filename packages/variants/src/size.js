import { css } from 'lit-element';

export default function size(prop) {
  let variantStyles = css``;
  switch (prop) {
    case '0':
      variantStyles = css`
        [size='0'] {
          font-size: var(--spky-font-sizes-0);
        }
      `;
      break;

    case '1':
      variantStyles = css`
        [size='1'] {
          font-size: var(--spky-font-sizes-1);
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
