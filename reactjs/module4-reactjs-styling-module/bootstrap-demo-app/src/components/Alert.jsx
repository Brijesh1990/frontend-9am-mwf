import React from "react";
import { Container,Alert } from "react-bootstrap";
function AlertApp()
{
    return(
        <>
            <Container className="p-5 mt-5 w-50 shadow mx-auto">
              <h2>Alert components</h2>
              <hr className="border border-dark border-1 w-50" />
                <Alert className="alert alert-success mt-4 alert-dismissible fade show" role="alert">
                    <span className="text-dark">Thanks for submitted your details</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </Alert>

                <Alert className="alert alert-danger mt-4">
                    <span className="text-dark">Thanks for submitted your details</span>
                </Alert>

                <Alert className="alert alert-warning mt-4">
                    <span className="text-dark">Thanks for submitted your details</span>
                </Alert>

                <Alert className="alert alert-primary alert-dismissible fade show mt-4">
                    <span className="text-dark">Thanks for submitted your details</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </Alert>
            </Container>
        </>
    )
}

export default AlertApp