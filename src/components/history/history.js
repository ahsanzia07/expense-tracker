import React ,{useContext} from "react"
import { GlobalContext } from "../../context/globalstate"
import "./history.css"
import { Transaction } from "../transaction";
export default function History(){
    const {transactions} = useContext(GlobalContext);
    

     return <div className="history">
         <h2>History</h2>
         <hr/>
        <ul className="list">
            {
                transactions.map(transaction =>(
                 <Transaction key={transaction.id} transaction={transaction}/>))
            }
           
        </ul>
     </div>

}