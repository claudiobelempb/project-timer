import { ReactNode } from 'react';
import './styles.scss';

const STATUS_COLOR = {
  bgWarning: 'bg-warning',
  bgDanger: 'bg-danger',
  bgSuccess: 'bg-success'
} as const;

type TypeStatus = {
  children?: ReactNode;
  colorStatus: keyof typeof STATUS_COLOR;
  title: string;
};

const Status: React.FC<TypeStatus> = ({ children, colorStatus, title }) => {
  return (
    <div className='status__container'>
      <div className={`status ${STATUS_COLOR[colorStatus]}`}></div>
      <span>{title}</span>
    </div>
  );
};

export { Status };
