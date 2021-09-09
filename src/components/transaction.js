import React ,{createContext, useReducer} from "react"
import { useContext } from "react";
import { GlobalContext } from "../context/globalstate";

export const Transaction =({transaction})=>{
    const {deleteTransaction}=useContext(GlobalContext);
    const sign =transaction.amount<0 ? '-': '+';


    return (
        <li className={transaction.amount<0 ? 'minus' : 'plus'  }>
         <span>   {transaction.text} </span> <span> {sign}$ {Math.abs(transaction.amount)}</span> 
            <button  onClick={()=>deleteTransaction(transaction.id)}  className="deletebtn">x</button>

        </li>
    )
}