import * as S from './styles';
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <S.Container>
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
    </S.Container>
  );
};