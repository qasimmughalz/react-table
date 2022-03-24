import React from "react";



export const GlobalFilterFunction = ({filter, setFilter})=>{
    
    return(
       <span>
           Search:
           <input value={filter} onChange={e => setFilter(e.target.value)} ></input>
           
       </span>
    )

}