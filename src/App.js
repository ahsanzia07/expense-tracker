import React from "react"
import "./App.css"
import Balance from "./components/balance/balance"
import History from "./components/history/history"
import Transaction from "./components/transaction/transactions"
import {GlobalProvider} from "./context/globalstate"
import IncomeExp from "./components/income/incomeexpenses"

function App() {
  return (
    <GlobalProvider>
     
          <div >
    
        <Balance/>
        <IncomeExp/>
        <History/>
        <Transaction/>
        </div>

    </GlobalProvider>

  );
}

export default App;
