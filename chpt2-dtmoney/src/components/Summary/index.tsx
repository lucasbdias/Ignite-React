import { useContext } from 'react';

import { TransactionsContext } from '../../TransactionsContext';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import * as S from './styles';

export function Summary() {
  const transactions = useContext(TransactionsContext);
  console.log(transactions)

  return (
    <S.Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>R$69,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>- R$24,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$45,00</strong>
      </div>
    </S.Container>
  );
};