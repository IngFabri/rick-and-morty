import './App.css';
import Cards from './components/Cards-Container/Cards';
import Nav from './components/NavBar/Nav/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail"
import { useLocation } from 'react-router-dom';
import Form from "./components/Form/Form";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Favorites from './components/Favorites/Favorites';

function App() {
const location = useLocation();
let [characters, setCharacters] = useState([]);
let [access, setAccess] = useState(false)
const [renderedCharacterIds, setRenderedCharacterIds] = useState([]);
const navigate = useNavigate()

async function login(userData) {
   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      const {data} = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      }      
   catch (error) {
      console.log(error.message)
   }
}


useEffect(() => {
   !access && navigate('/');
}, [access]);


async function onSearch(id) {
   try {
      const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)

      if (!data.name) throw new Error("No hay data")
      if (renderedCharacterIds.includes(data.id)) throw new Error("Este personaje ya ha sido renderizado")

      setRenderedCharacterIds((prevIds) => [...prevIds, data.id]);
      setCharacters((oldChars) => [...oldChars, data]);
      } 
   catch (error) {
      if(error.message.includes("No hay data")) alert("Id no encontrado")
      if(error.message.includes("renderizado")) alert("Este personaje ya ha sido renderizado")
   } 
};


const onClose = (id)=> {
   const filters = characters.filter((character) =>{
      return character.id !== Number(id)
   });
   setCharacters(filters)
   setRenderedCharacterIds(filters.map(char=>char.id))
}

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
            <Routes>
               <Route path="/favorites" element={<Favorites/>}/>
               <Route path="/" element={<Form login={login}/>}/>
               <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
