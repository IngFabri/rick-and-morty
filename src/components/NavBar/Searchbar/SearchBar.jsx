import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (event)=> {
      setId(event.target.value)
      // console.log(event.target.value)
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} onClick={(event)=>{event.target.value = ""}}/>
         <button onClick={()=> {onSearch(id)}}>Agregar</button> 
      </div>
   );
}
