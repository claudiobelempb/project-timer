import { NavHome } from '../components/NavHome';

type LayoutHomeProps = {
  children?: React.ReactNode;
};

const LayoutHome: React.FC<LayoutHomeProps> = ({ children }) => {
  return (
    <main className='container'>
      <div className='row'>
        <div className='col'>
          <NavHome />
          {children}
        </div>
      </div>
    </main>
  );
};

export { LayoutHome };
