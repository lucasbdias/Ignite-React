import { useEffect } from 'react';
import { api } from '../../services/api';

import * as S from './styles';

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, []);

  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de websites</td>
            <td className="deposit">R$12000</td>
            <td>Desenvolvimento</td>
            <td>20/02/2021</td>
          </tr>
          <tr>
            <td>Cadeira</td>
            <td className="withdraw">- R$700</td>
            <td>Escritório</td>
            <td>25/02/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
};