import {NavLink} from "react-router-dom"
import {addFav, removeFav} from "../../redux/actions"
import { useState } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import style from "./Card.module.css"

function Card({onClose, id,name, status, species, gender, origin, image, addFav, removeFav, myFavorites}) {

   const location = useLocation()
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setisFav(true);
         }
      });
   }, [myFavorites]);

   const [isFav, setisFav] = useState(false)
   const handleFavorite = ()=>{
      if(isFav){
         setisFav(!isFav)
         removeFav(id)
      }else{
         setisFav(!isFav)
         addFav({id,name,status,species,origin,gender,image})
      }
   }

   return (
      <div className={style.Container}>
          {location.pathname === "/home" && <button onClick={()=>onClose(id)}>X</button>}
          <button onClick={handleFavorite}>{isFav ? "❤️" : "🤍"}</button>
         <NavLink to={`/detail/${id}`}><h2>{name}</h2></NavLink>
         <h2>{status}</h2>
         <h2>{origin}</h2>
         <h2>{gender}</h2>
         <h2>{species}</h2>
         <img src={image} alt='' /> 
      </div>
   );
   }

const mapStateToProps = (state)=>{
   return {
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps = {
   addFav,
   removeFav
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)