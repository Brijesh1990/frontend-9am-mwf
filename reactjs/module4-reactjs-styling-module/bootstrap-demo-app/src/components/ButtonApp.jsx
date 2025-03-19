import React from "react";
import { Container,Button } from "react-bootstrap";
function ButtonApp()
{
    return(
        <>
            <Container  className="p-5 mt-5 bg-primary text-white  mx-auto w-75 mx-auto">
                <h1>This is a just examples of container & buttons</h1>
                <p>Hey its is all about container</p>
                <Button className="btn btn-md btn-danger text-white">SignUp <i className="bi bi-person"></i></Button>

                <Button className="btn btn-lg btn-outline-warning ms-5 text-white">Send <i className="bi bi-person"></i></Button>

                
                <Button className="btn btn-lg btn-outline-success bg-dark ms-5 text-white">Send <i className="bi bi-person"></i></Button>

                
                <Button className="btn btn-lg btn-outline-success w-50 mt-5 bg-dark ms-5 text-white">Send <i className="bi bi-person"></i></Button>
            </Container>
           
        </>
    )
}
export default ButtonApp