import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from "@radix-ui/react-dialog"

import logoImg from '../../assets/logo.svg';

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg} alt="Logo do ignite" />

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton>Nova transação</NewTransactionButton>
                    </Dialog.Trigger>

                    <Dialog.Content>
                        <Dialog.Title>Vova transação</Dialog.Title>

                        <Dialog.Close />
                    </Dialog.Content>
                    <Dialog.Portal>
                        <Dialog.DialogPortal />
                    </Dialog.Portal>
                </Dialog.Root>
            </HeaderContent>
        </HeaderContainer>
    )
}