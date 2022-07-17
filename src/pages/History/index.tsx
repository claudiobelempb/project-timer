import { Status } from '../../components/Status';
import { LayoutHome } from '../../layouts/LayoutHome';

import './styles.scss';

const HistoryPage: React.FC = () => {
  return (
    <LayoutHome>
      <div className='history__container'>
        <h1>Meu histórico</h1>
        <div className='table-responsive'>
          <table className='table align-middle table-hover'>
            <thead className='rounded-3'>
              <tr>
                <th scope='col'>Tarefa</th>
                <th scope='col'>Duração</th>
                <th scope='col'>Início</th>
                <th scope='col'>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conserto de débitos técnicos </td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status colorStatus='bgSuccess' title='Em andamento' />
                </td>
              </tr>
              <tr>
                <td>Conserto de débitos técnicos </td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status colorStatus='bgDanger' title='Interrompido' />
                </td>
              </tr>
              <tr>
                <td>Conserto de débitos técnicos </td>
                <td>25 minutos</td>
                <td>Há cerca de 2 meses</td>
                <td>
                  <Status colorStatus='bgWarning' title='Concluído' />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutHome>
  );
};

export default HistoryPage;
