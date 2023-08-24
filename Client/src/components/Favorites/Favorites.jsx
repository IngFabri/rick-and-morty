import { connect } from "react-redux";
import Card from "../Card/Card";
import * as actions from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Favorites =({myFavorites})=>{
    
    const [aux,setAux] = useState(false)
    const dispatch = useDispatch()
    const handleOrder = (event)=>{
        dispatch(actions.orderCards(event.target.value))
        setAux(true)
    };
    const handleFilters =(event)=>{
        dispatch(actions.filterCards(event.target.value))
    };

    return <div>
        <select onChange={handleOrder}>
            <option value="A">Ascendente</option>
            <option value="B">Descendente</option>
        </select>
        <select onChange={handleFilters}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">ALL</option>
        </select>
        {myFavorites.map(character => {
            return <Card key={character.id} id={character.id} name={character.name} gender={character.gender} species={character.species} origin={character.origin} status={character.status} image={character.image}/>
        })}
    </div>
}

const mapStateToProps = (state)=>{
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites)