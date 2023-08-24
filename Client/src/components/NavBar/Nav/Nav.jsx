import SearchBar from "../Searchbar/SearchBar";
import {NavLink} from "react-router-dom"
import style from "./Nav.module.css"

const Nav = ({onSearch})=> {
    return <div className={style.Container}>
        <SearchBar onSearch={onSearch}/>
        <button><NavLink to="/home">Home</NavLink></button>
        <button><NavLink to="/about">About me</NavLink></button>
        <button><NavLink to="/favorites">Favorites</NavLink></button>
    </div>
}

export default Nav;