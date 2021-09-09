import React ,{useState,useContext} from "react"
import { GlobalContext } from "../../context/globalstate";

import "./transaction.css"


export default function Transaction(){

    const [text,setText]= useState("");
    const [amount, setAmount]= useState(0)

    const {addTransaction}=useContext(GlobalContext);
    const onSubmit=e=>{
        e.preventDefault();

        const newTransaction={
            id:Math.floor(Math.random()*100000000),
            text,
            amount:+amount
        }
        addTransaction(newTransaction);
    }

     return <div className="transaction">
         <h2>Add New Transaction</h2>
         <hr></hr>
        <form onSubmit={onSubmit}>
            <div className="form-control">

            <label htmlFor="text">Enter Name:</label>
            <br />
            <input type="text"  onChange={(e)=> setText(e.target.value)} placeholder="Enter text" />
            </div>
            <div  className="form-control">
            <label htmlFor="amount">Enter Amount:</label>
            <br />
            <input type="number"   onChange={(e)=> setAmount(e.target.value)}  placeholder="Enter amount" />
         
            </div>
            <br />
            <button  className="btn" > Add Transaction</button>
             </form>

     </div>

}