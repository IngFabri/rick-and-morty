import { connect } from "react-redux"
import Card from "../Card/Card"

const Favorites =({myFavorites})=>{
    return <div>
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