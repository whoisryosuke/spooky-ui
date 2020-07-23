import { css } from 'lit-element';

export default function state(prop) {
  let variantStyles = css``;
  switch (prop) {
    case 'success':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-green-500);
          color: white;
        }
      `;
      break;

    case 'message':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-blue-500);
          color: white;
        }
      `;
      break;

    case 'warning':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-yellow-500);
          color: white;
        }
      `;
      break;

    case 'danger':
      variantStyles = css`
        [variant='success'] {
          background-color: var(--spky-colors-red-500);
          color: white;
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
