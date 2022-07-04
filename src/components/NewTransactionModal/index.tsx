import ReactModal from "react-modal";
import {Container , TransactionTypeContent } from "./styles"
import close from '../../Assets/close.svg'
import income from '../../Assets/income.svg'
import outcome from '../../Assets/outcome.svg'
import { FormEvent, useState } from "react";
import { api } from "../services/api";


interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    const [type,settype] = useState('deposit')
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    const [category, setCategory] = useState('');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = 
        {category,
            number,
            text,
            type};

            api.post('/transactions', data)
    }

    return(
        <ReactModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="Overlay"
        className="Modal">

            <button type="button">
                <img src={close} alt="Close Modal" onClick={onRequestClose}
                className="react-modal-close" />
            </button>
        
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>
            <form>
                <input type="text" 
                placeholder="Transação"
                value={text}
                onChange={event => setText(event.target.value)}/>
                

                <input type="Number" 
                placeholder="Preço"
                value={number}
                onChange={event => setNumber(+event.target.value)}/>
                

            <TransactionTypeContent>
                <button
                type="button"
                onClick={()=> {settype("deposit")}}
                className={type === 'deposit' ? 'active' : ""}
                
                >
                    <img src={income} alt="income"></img>
                    <span>Entradas</span>
                    

                </button>

                <button 
                type="button"
                onClick={()=> {settype("withdraw")}}
                className={type === 'withdraw' ? 'disabled' : ""}>

                    <img src={outcome} alt="withdraw"></img>
                    <span>Saidas</span>

                </button>
                </TransactionTypeContent>
                <input type="text"
                placeholder="Categoria"
                value={category}
                onChange={event => setCategory(event.target.value)}/>
                

                <button type="submit">Cadastrar</button>

            </form>
            </Container>
        </ReactModal>
    )
}