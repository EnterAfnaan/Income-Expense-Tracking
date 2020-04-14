import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    var income = transactions.filter(transaction => { if(transaction.amount> 0) return transaction.amount  })
    var reduce = income.reduce((sum , i) => { return sum+i.amount},0);


    var expense = transactions.filter(transaction => { if(transaction.amount < 0) return transaction.amount  })
    var reduce1 = expense.reduce((sum , i) => { return sum+i.amount},0);

    return (
        <>
          <div className = "inc-exp-container">
              <div>
                <h4>Income</h4>
                  <p  className = "money-plus">+${reduce}</p>
              </div>
              <div>
                  <h4>Expense</h4>
                  <p  className = "money-minus">-${Math.abs(reduce1)}</p>
              </div>
          </div>  
        </>
    )
}
