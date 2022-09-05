import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog"

export const Overlay = styled(Dialog.Overlay)`
    position: fixed; //sempre na mesma posição na tela 
    width: 100vw;
    height: 100vh;// os 2(vw, vh) pra forcar que o Overlay ocupe a tela toda 
    inset: 0;// o mesmo que: top: 0; bottom: 0;  left: 0; rigtht: 0; 
    background: rgba(0, 0, 0, 0.75);// fundo transparente escuro 

`;

export const Content = styled(Dialog.Content)`
    min-width: 32rem;
    border-radius: 6px;
    padding: 2.5rem 3rem;
    background: ${props => props.theme["gray-800"]};

    position: fixed;
    //hackzinho pra centralizar o conteúdo do modal na tela 
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    //termina aqui

    form {
        margin-top: 2rem;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["gray-300"]};
            padding: 1rem;

            &::placeholder {
                color: ${props => props.theme["gray-500"]};  
            }
        }

        button[type="submit"] {
            height: 58px;
            border: 0;
            background: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            margin-top: 1.5rem;
            cursor: pointer;

            &:hover {
                background: ${props => props.theme["green-700"]};
                transition: background-color 0.2s;
            }
        }
    }
`;

export const CloseButton = styled(Dialog.Close)`
    position: absolute;
    background: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    line-height: 0; //ajusta o tamanho do botão X de fechar, pois sem ele a parte de baixo fica maior 
    cursor: pointer;
    color: ${props => props.theme["gray-500"]}
`;