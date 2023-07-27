import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route} from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail"
import { useLocation } from 'react-router-dom';
import Form from "./components/Form";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
const location = useLocation();
let [characters, setCharacters] = useState([]);
let [access, setAccess] = useState(false)
const EMAIL = "fabri021090@gmail.com"
const PASSWORD = "Contra123"
const navigate = useNavigate()
const login = (userData)=> {
   if(userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true)
      navigate("/home")
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);


function onSearch(id) {
   axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id)=> {
   const filters = characters.filter((character) =>{
      return character.id !== Number(id)
   });
   setCharacters(filters)
}

   return (
      <div className='App'>
         {location.pathname !== "/" && <Nav onSearch={onSearch}/>}
            <Routes>
               <Route path="/" element={<Form login={login}/>}/>
               <Route path="/home" element={<Cards onClose={onClose} characters={characters} />}/>
               <Route path="/about" element={<About/>}/>
               <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
