import React ,{useContext} from "react"
import "../balance/balance.css"
import { GlobalContext } from "../../context/globalstate"

export default function IncomeExp(){
    const {transactions} = useContext(GlobalContext);
    

    const amounts = transactions.map( transaction=> transaction.amount);


    const income= amounts.filter(item => item>0).reduce((acc,item)=> (acc+=item),0).toFixed(2);


    const expense=(
        amounts.filter(item => item <0).reduce((acc,item)=>(acc+=item),0)*-1).toFixed(2);
    
    

     return <div className="inc-exp-container">
       


         <div className="incexp">
             <div className="income">
                  <h4 >Income</h4> 
                  <p className="money plus">{income}</p></div><hr></hr>

             <div className="expense">
                 <h4 >Expense</h4>
                 
                  <p className="money minus">{expense}</p></div>
         </div>
     </div>

}