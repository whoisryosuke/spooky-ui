import { css } from 'lit-element';

export default function state(prop) {
  let variantStyles = css``;
  switch (prop) {
    case 'success':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-success);
          color: var(--spky-colors-text-inverted);
        }
      `;
      break;

    case 'message':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-message);
          color: var(--spky-colors-text-inverted);
        }
      `;
      break;

    case 'warning':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-warning);
          color: var(--spky-colors-text-inverted);
        }
      `;
      break;

    case 'danger':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-danger);
          color: var(--spky-colors-text-inverted);
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
