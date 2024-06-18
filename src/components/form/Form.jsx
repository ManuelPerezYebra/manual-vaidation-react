import { StyledForm } from "./form.styles"

const Form = ()=>{
    return <StyledForm>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
        <input type="email" name="mail" id="mail" placeholder="Email Address"/>
        <input type="password" name="password" id="password" placeholder="Password"/>
        <input type="submit" value="CLAIM YOUR FREE TRIAL" />
        <p>By clicking the button, you are agreeing to our <span>Terms and Services</span>
             </p>
    </StyledForm>
}

export default Form