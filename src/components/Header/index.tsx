import { useState } from 'react';
import ReactModal from 'react-modal';
import logo from '../../Assets/Logo.svg'

import { Container, Content } from './styles'

export function Header() {

    const [isNewTranscationModalOpen, setIsNewTranscationModalOpen] = useState(false);

    function handleOpenNewTranscationModal(){
      setIsNewTranscationModalOpen(true)
    }
  
    function handleCloseNewTranscationModal(){
      setIsNewTranscationModalOpen(false)
    }

    //modal adicionado ao botão Cadastrar transação, feito com ReactModal

    return (
        <Container>
            <Content>
                <img src={logo} alt="dt money" />
                <button type="button" onClick={handleOpenNewTranscationModal}>
                    Nova Transação
                </button>
                <ReactModal 
                isOpen={isNewTranscationModalOpen}
                onRequestClose={handleCloseNewTranscationModal}>
                    <h2>Cadastrar Transação</h2>
                </ReactModal>
            </Content>
        </Container>
    )
}