import { GlobalStyle } from "./styles/global"
import { Header } from "./components/Header"
import { Dashboard } from "./components/Dashboard";
import ReactModal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

ReactModal.setAppElement('#root');

export function App() {

  const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(false);

  function handleOpenNewTranscationModal(){
    setIsNewTranscationModalOpen(true)
  }

  function handleCloseNewTranscationModal(){
    setIsNewTranscationModalOpen(false)
  }

  //modal adicionado ao botão Cadastrar transação, feito com ReactModal



  return (
    <>
      <Header aka={handleOpenNewTranscationModal}/>

      <Dashboard />

      <NewTransactionModal
       isOpen={isNewTranscationModalOpen}
       onRequestClose={handleCloseNewTranscationModal}/>

      <GlobalStyle />
    </>
  );
}
