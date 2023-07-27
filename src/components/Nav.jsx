import SearchBar from "./SearchBar";
import {NavLink} from "react-router-dom"

const Nav = ({onSearch})=> {
    return <div>
        <SearchBar onSearch={onSearch}/>
        <button><NavLink to="/home">Home</NavLink></button>
        <button><NavLink to="/about">About me</NavLink></button>
    </div>
}

export default Nav;