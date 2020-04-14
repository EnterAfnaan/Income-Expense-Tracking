import React , {createContext , useReducer} from 'react';
import AppReducer from './AppReducer'

// Initial state 
const initialState = { 
    transactions: [
        { id: 1, text:'flower', amount: -30},
        { id: 2, text:'salary', amount: 1130},
        { id: 3, text:'chocolate', amount: -10},
        { id: 4, text:'laptop', amount: -400}
    ]
}


// create context
export const GlobalContext = createContext(initialState);




//provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer , initialState);

    // action 
    function deleteTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return <GlobalContext.Provider value = {{ 
        transactions : state.transactions,
                       deleteTransaction,
                       addTransaction
                       }}>


        {children}
    </GlobalContext.Provider>
} 