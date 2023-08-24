const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

const validate = (inputs)=> {
    const errors = {};
    if(!regexEmail.test(inputs.email)) errors.email = "La direccion de correo no es valida"
    if(!regexPassword.test(inputs.password)) errors.password = "La contraseña debe contener al menos una letra minúscula, al menos un dígito y una longitud total entre 6 y 10 caracteres.";
    return errors
}

export default validate;