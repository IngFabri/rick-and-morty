import {ADD_FAV, FILTER, ORDER, REMOVE_FAV} from "./actions-types"

const initialState = {
    myFavorites: [],
    allCharacters:[]
}

const reducer = (state=initialState, {type,payload})=>{
    switch(type){
        case ADD_FAV: 
            return {
                ...state, 
                myFavorites: [...state.allCharacters, payload],
                allCharacters:[...state.allCharacters, payload]            
            }
        case REMOVE_FAV: 
            const filteredCharacter = state.myFavorites.filter(character => character.id !== payload)
            return {...state, myFavorites: filteredCharacter}

       case FILTER: 
            const allFilteredCharacters = state.allCharacters.filter(character => {
                return character.gender === payload
            })
            return {...state, myFavorites:
                payload !== "allCharacters" ?
                allFilteredCharacters:
                [...state.allCharacters]
            }

        case ORDER: 
            const allCharacterscopy = [...state.allCharacters];
            return {...state,
            myFavorites: payload === "A"? 
            allCharacterscopy.sort((a,b)=> a.id - b.id):
            allCharacterscopy.sort((a,b)=> b.id - a.id)
            }

        default: 
            return {...state}
    }
}

export default reducer;