import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";

export function App() {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen,
  ] = useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsNewTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsNewTransactionModalOpen(false);
  };

  Modal.setAppElement("#root");

  return (
    <>
      <Header
        onOpenNewTransitionModal={
          handleOpenNewTransactionModal
        }
      />
      <Dashboard />
      <Modal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação!</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
