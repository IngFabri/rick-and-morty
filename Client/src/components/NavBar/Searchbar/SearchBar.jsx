import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("")

   const handleChange = (event)=> {
      setId(event.target.value)
   };

   const handleClick = ()=>{
      onSearch(id)
      setId("")
   }

   const handleKeyEvent = (event)=>{
      if(event.key === "Enter"){
         handleClick()
      }
   }

   return (
      <div>
         <input type='search' value={id} onChange={handleChange} onKeyUp={handleKeyEvent}/>
         <button onClick={handleClick}>Agregar</button> 
      </div>
   );
}
