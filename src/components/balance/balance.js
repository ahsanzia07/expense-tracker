import React ,{useContext} from "react"
import { GlobalContext } from "../../context/globalstate"
import "./balance.css"
export default function Balance(){
    const {transactions} = useContext(GlobalContext);
    

    const amounts = transactions.map( transaction=> transaction.amount);
    const total =amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2);
    
    

     return <div className="balance">
          <h2> Expense tracker by Ahsan </h2><hr />
         <h4> Your Balance is</h4>
         <h2 > $ {total}</h2>


    
     </div>

}