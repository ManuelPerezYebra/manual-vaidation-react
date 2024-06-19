import { useState } from "react";
import {  ErrorText, StyledForm, StyledInput } from "./form.styles";

const validateForm = (name, value, setFormData) => {
    const formatedValue = value.trim();
    const regexName = /^[a-z]+$/i;
    const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/;
    
    let isValid = true;

    if (name === 'name') {
        isValid = regexName.test(formatedValue) || formatedValue === "";
        setFormData((prevState) => ({
            ...prevState,
            errors: {
                ...prevState.errors,
                name: formatedValue === "" ? false : !isValid
            }
        }));
    }else if (name ==='lastname'){
        isValid = regexName.test(formatedValue)|| formatedValue==='';
        setFormData((prevState)=>({
            ...prevState,
            errors: {
                ...prevState.errors,
                lastname: formatedValue===''? false : !isValid
            }
        }))
    }else if (name==='mail'){
        isValid=regexMail.test(formatedValue) || formatedValue ==='';
        setFormData((prevState)=>({
            ...prevState,
            errors:{
                ...prevState.errors,
                mail: formatedValue==='' ? false : !isValid
            }
        }))
    }else if(name==='password'){
        isValid=regexPassword.test(formatedValue) || formatedValue === '';
        setFormData((prevState)=>({
            ...prevState,
            errors:{
                ...prevState.errors,
                password: formatedValue === '' ? false : !isValid
            }
        }))
    }
    // Añadir validación para otros campos según sea necesario
};

const changeDataValues = (event, setFormData) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
        ...prevState,
        [name]: value
    }));
    validateForm(name, value, setFormData);
};

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        mail: '',
        password: '',
        errors: {}
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de envío del formulario
        console.log('Form submitted:', formData);
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="name" >
                <img src="icon-error.svg" alt=""  style={{ visibility: formData.errors.name ? 'visible' : 'hidden' }}/>
                <StyledInput 
                    type="text"
                    name="name"
                    id="name"
                    $outline={formData.errors.name}
                    $hasError={formData.errors.name}
                    placeholder="Name"
                    onInput={(event) => changeDataValues(event, setFormData)}
                />
                <ErrorText style={{ visibility: formData.errors.name ? 'visible' : 'hidden' }}>El nombre no es Válido</ErrorText>
            </label>
            <label htmlFor="lastname">
                <img src="icon-error.svg" alt="" style={{ visibility: formData.errors.lastname ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="text"
                    name="lastname"
                    id="lastname"
                    $outline={formData.errors.lastname}
                    $hasError={formData.errors.lastname}
                    placeholder="Last Name"
                    onInput={(event) => changeDataValues(event, setFormData)}
                />
                <ErrorText style={{ visibility: formData.errors.lastname ? 'visible' : 'hidden' }}>El Apellido no es Válido</ErrorText>
            </label>
            <label htmlFor="mail">
                <img src="icon-error.svg" alt="" style={{ visibility: formData.errors.mail ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="email"
                    name="mail"
                    id="mail"
                    $outline={formData.errors.mail}
                    $hasError={formData.errors.mail}
                    placeholder="Email Address"
                    onInput={(event) => changeDataValues(event, setFormData)}
                />
                <ErrorText style={{ visibility: formData.errors.mail ? 'visible' : 'hidden' }}>El mail no es Válido</ErrorText>
            </label>
            <label htmlFor="password">
                <img src="icon-error.svg" alt="" style={{ visibility: formData.errors.password ? 'visible' : 'hidden' }} />
                <StyledInput
                    type="password"
                    name="password"
                    id="password"
                    $outline={formData.errors.password}
                    $hasError={formData.errors.password}
                    placeholder="Password"
                    onInput={(event) => changeDataValues(event, setFormData)}
                />
                <ErrorText style={{ visibility: formData.errors.password ? 'visible' : 'hidden' }}>La contraseña debe de tener letras mayúsculas, minúsculas y un carácter especial</ErrorText>
            </label>
            <input type="submit" value="CLAIM YOUR FREE TRIAL" />
            <p>By clicking the button, you are agreeing to our <span>Terms and Services</span></p>
        </StyledForm>
    );
};

export default Form;
