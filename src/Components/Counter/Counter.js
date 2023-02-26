import React,{useState} from "react";
const Counter = ()=>{
    const [count,setCount] = useState(0)
    const incrementcount=  ()=>{
       
        setCount(count+1)
    }
    const decrementcount=  ()=>{
       if (count >0)
{        setCount(count-1) 
   } 
else {
    alert("Negative Value Can't Decrement")
}
}
    return(
        <div> <button onClick={incrementcount}> Increment</button><h2>{count}</h2>  <button onClick={decrementcount}>Decrement </button>
     </div>
    )
}
export default Counter