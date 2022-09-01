import { Header } from "../../components/Header";
import { Summary } from "../../Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransitionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
           <Header /> 
           <Summary />

           <TransactionsContainer>
            <SearchForm />

            <TransitionsTable>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                        <td>
                            <PriceHighlight variant="income">
                            R$ 12.000,00
                            </PriceHighlight>
                        </td>
                        <td>Venda</td>
                        <td>30/08/2022</td>
                    </tr> 
                    <tr>
                        <td width="50%">Hamburger</td>
                        <td>
                            <PriceHighlight variant="outcome" >
                            - R$ 59,00
                            </PriceHighlight>
                        </td>
                        <td>Alimentação</td>
                        <td>10/08/2022</td>
                    </tr> 
                </tbody>
            </TransitionsTable>
           </TransactionsContainer>
        </div>
    )
}