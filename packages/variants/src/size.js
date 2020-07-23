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

    case '2':
      variantStyles = css`
        [size='2'] {
          font-size: var(--spky-font-sizes-2);
        }
      `;
      break;

    case '3':
      variantStyles = css`
        [size='3'] {
          font-size: var(--spky-font-sizes-3);
        }
      `;
      break;

    case '4':
      variantStyles = css`
        [size='4'] {
          font-size: var(--spky-font-sizes-4);
        }
      `;
      break;

    case '5':
      variantStyles = css`
        [size='5'] {
          font-size: var(--spky-font-sizes-5);
        }
      `;
      break;

    case '6':
      variantStyles = css`
        [size='6'] {
          font-size: var(--spky-font-sizes-6);
        }
      `;
      break;

    case '7':
      variantStyles = css`
        [size='7'] {
          font-size: var(--spky-font-sizes-7);
        }
      `;
      break;

    case '8':
      variantStyles = css`
        [size='8'] {
          font-size: var(--spky-font-sizes-8);
        }
      `;
      break;

    case '9':
      variantStyles = css`
        [size='9'] {
          font-size: var(--spky-font-sizes-9);
        }
      `;
      break;

    default:
      break;
  }

  return variantStyles;
}
