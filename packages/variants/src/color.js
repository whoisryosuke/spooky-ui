import { css } from 'lit-element';

export default function color(prop) {
  let variantStyles = css``;
  switch (prop) {
    case 'primary':
      variantStyles = css`
        [variant='primary'] {
          background-color: var(--spky-colors-primary);
          color: var(--spky-colors-text-inverted);
          border-color: var(--spky-colors-text-inverted);
          text-align: center;
        }
      `;
      break;

    case 'secondary':
      variantStyles = css`
        [variant='secondary'] {
          background-color: var(--spky-colors-secondary);
          color: var(--spky-colors-text-inverted);
          border-color: var(--spky-colors-text-inverted);
          text-align: center;
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
