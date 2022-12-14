import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { TransactionsContext } from "../../contexts/TransactionsContext";
import { Summary } from "../../Summary";
import { dataFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransitionsTable } from "./styles";

export function Transactions() {
    const {transactions} = useContext(TransactionsContext);

    return (
        <div>
           <Header /> 
           <Summary />

           <TransactionsContainer>
            <SearchForm />

            <TransitionsTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                        <td width="50%">{transaction.description}</td>
                            <td>
                                <PriceHighlight variant={transaction.type}>
                                   {transaction.type === 'outcome' && '- '} 
                                {priceFormatter.format(transaction.price)}
                                </PriceHighlight>
                            </td>
                            <td>{transaction.category}</td>
                            <td>{dataFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr> 
                        )
                    })}
                </tbody>
            </TransitionsTable>
           </TransactionsContainer>
        </div>
    )
}