import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  
    const { transactions } =  useContext(GlobalContext);
    
     
    var Totalamount = transactions.reduce((sum,transaction) => sum + transaction.amount,0)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>
                ${Totalamount}
            </h1>
        </>
    )
}
