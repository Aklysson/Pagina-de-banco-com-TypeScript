import styled from 'styled-components'

export const Container = styled.header`
background: var(--blue);
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 1120px;

    padding: 2rem 1rem 10rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    button{
        font-size:1rem;
        color: #fff;
        background-color: var(--blue-light);
        border: 0;
        padding: 0 2rem;
        height:3rem;

        transition:0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
    `;