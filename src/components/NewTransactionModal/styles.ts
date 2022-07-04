import styled from 'styled-components'
import { transparentize } from 'polished'
export const Container = styled.header`
 h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    font-weight: 600;
 }

    input {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 0.25rem;

        border: 1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
    }

    & + input {
        margin-top: 1rem;
    }
}

button[type=submit] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: filter 0.2s;

    &:hover{
        filter: brightness(0.9);

    }
}
`

export const TransactionTypeContent = styled.header`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 0.5rem;

button{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background: transparent;

    transition: border-color 0.2s;

    &:hover{
        border-color: #aaa;

    }

    img{
        width: 20px;
        height: 20px;
    }
    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)
    }
}

.disabled {
    background: ${transparentize(0.9,'#E52e54')};
    border: 1px solid #aaa
}

.active {
    background: ${transparentize(0.9,'#33CC95')};
    border: 1px solid #aaa
}


`

;