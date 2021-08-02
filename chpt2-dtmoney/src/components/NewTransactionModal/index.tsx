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
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título" 
        />
        <input 
          type="number" 
          placeholder="Valor"
        />
        <input 
          placeholder="Categoria" 
        />

        <button type="submit">
          Cadastrar
        </button>
      </Modal>
    </S.Container>
  );
};