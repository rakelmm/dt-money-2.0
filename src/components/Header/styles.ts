import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${props => props.theme["gray-900"]};
    padding: 2.5rem 0 7.5rem;
`;

//HeaderContent é que tem o conteudo que vai ficar centralizado
export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto; //pra centralizar
    padding: 0 1.5rem; //se a tela for menor, esse padding nas lateiais vai fazer com que não fique grudado

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NewTransactionButton = styled.button`
    height: 50px;
    border: 0;
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
        background: ${props => props.theme["green-700"]};
        transition: background-color 0.2s;
    }
`;