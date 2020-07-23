import { css } from 'lit-element';

export default function color(prop) {
  let variantStyles = css``;
  switch (prop) {
    case 'primary':
      variantStyles = css`
        [variant='primary'] {
          background-color: var(--spky-colors-primary);
          color: white;
          border-color: white;
          text-align: center;
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
