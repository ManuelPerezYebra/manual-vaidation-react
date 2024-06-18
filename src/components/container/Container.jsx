import Form from "../form/Form"
import { Banner, Content, FormContainer, InfoContainer, StayledMainContainer } from "./container.styles"

const Container = ()=>{
    return(<>
         <StayledMainContainer>
        <InfoContainer>
            <Content>
                <h1>Learn to code by watching others</h1>
            <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
            </Content>
            
        </InfoContainer>
        <FormContainer>
        <Banner>
            <p><strong>Try it free 7 days</strong>Try it free 7 days then $20/mo. thereafter</p>
        </Banner>
        <Form/>
        </FormContainer>
        </StayledMainContainer>
    </>
    )
}

export default Container