import { ButtonContainer } from './Button.styles';
import { ThemeProviderProps } from 'styled-components';

type TypeVariant = {
  type: 'button' | 'link' | 'submit' | 'icon';
  title: string;
  color:
    | 'btn-primary'
    | 'btn-secondary'
    | 'btn-success'
    | 'btn-danger'
    | 'btn-warning'
    | 'btn-info'
    | 'btn-light'
    | 'btn-dark'
    | 'btn-link'
    | 'btn-outline-primary'
    | 'btn-outline-secondary'
    | 'btn-outline-success'
    | 'btn-outline-danger'
    | 'btn-outline-warning'
    | 'btn-outline-info'
    | 'btn-outline-light'
    | 'btn-outline-dark'
    | 'btn-outline-link';
  size?: 'btn-lg' | 'btn-sm';
  disabled?: boolean;
  href?: string;
  props?: string;
};
const ButtonDefault: React.FC<TypeVariant> = ({
  color,
  title,
  size,
  type,
  disabled,
  href,
  props
}) => {
  switch (type) {
    case 'button':
      return (
        <button
          type='button'
          className={`btn ${props} ${size} text-white`}
          disabled={disabled}
        >
          {title}
        </button>
      );
    case 'link':
      return (
        <a
          href={href}
          type='button'
          className={`btn ${color} ${size} text-white`}
        >
          {title}
        </a>
      );
    case 'submit':
      return (
        <button
          type='submit'
          className={`btn ${color} ${size} text-white`}
          disabled={disabled}
        >
          {title}
        </button>
      );
    case 'icon':
      return (
        <button
          type='button'
          className={`btn ${color} ${size} text-white`}
          disabled={disabled}
        >
          {title}
        </button>
      );

    default:
      return (
        <button
          type='button'
          className={`btn ${color} ${size} text-white`}
          disabled={disabled}
        >
          {title}
        </button>
      );
  }
};

export { ButtonDefault };
