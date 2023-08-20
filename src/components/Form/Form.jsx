import { useState } from "react";
import validate from "../../validation"

const Form = ({login})=> {

    const [userData, SetUserData] = useState({email:"", password:""});
    const [errors, setErrors] = useState({email:"", password:""});

    const handleChange = (event)=> {
        SetUserData({...userData, [event.target.name]: event.target.value})
        setErrors(validate({...userData, [event.target.name]: event.target.value}))
    }
    const handleSubmit = (event)=> {
        event.preventDefault();
        const aux = Object.keys(errors);
        if(aux.length === 0) {
            SetUserData({email:"", password:""})
            setErrors({email:"", password:""})
        };
        login(userData)
        return 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input name ="email" value={userData.email} onChange={handleChange}></input>
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            <br/>
            <label>Password:</label>
            <input name="password" value={userData.password} onChange={handleChange}></input>
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
            <br/>
            <button>Submit</button>
        </form>
        </div>
    )
};

export default Form;