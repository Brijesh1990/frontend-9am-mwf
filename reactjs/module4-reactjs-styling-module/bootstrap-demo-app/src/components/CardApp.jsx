import React from "react";
import { Container,Button,Row, Card, CardBody, CardHeader } from "react-bootstrap";
import NavbarApp from "./NavbarApp";
function CardApp()
{
    return(
        <>
            <NavbarApp />
            <Container className="p-5 mt-5 w-75 shadow mx-auto bg-white p-5">
              <h2 className="text-warning">IPL 2025 Teams</h2>
              <hr className="border border-dark border-1 w-25" />
              <Row>
                <div className="col-md-4  p-2">
                    <Card>
                        <CardHeader className="bg-warning text-dark">Chennai superkings</CardHeader>
                        <CardBody>
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4  p-2">
                    <Card className="border border-2 border-danger">
                        <CardHeader className="bg-danger text-white">RCB</CardHeader>
                        <CardBody>
                            <img src="https://i.pinimg.com/736x/d0/2c/0e/d02c0e5155c7172e7e96e3955bf4367c.jpg" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-md-4  p-2">
                    <Card>
                        <CardHeader className="bg-primary text-white">Mumbai</CardHeader>
                        <CardBody>
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-4  p-2 mt-3">
                    <Card>
                        <CardHeader className="bg-primary text-white">Mumbai</CardHeader>
                        <CardBody>
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-4  p-2 mt-3">
                    <Card>
                        <CardHeader className="bg-primary text-white">Mumbai</CardHeader>
                        <CardBody>
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-md-4  p-2 mt-3">
                    <Card>
                        <CardHeader className="bg-primary text-white">Mumbai</CardHeader>
                        <CardBody>
                            <img src="https://documents.iplt20.com/ipl/IPLHeadshot2024/57.png" alt="dhoni" className="img-fluid w-75" />
                            <p><b>Captains :</b> Ms dhoni</p>
                            <p><b>Team :</b> Chennai uperkings</p>
                            <p><b>Place :</b> Ranchi (jharakhand)</p>
                            <p><b>Ratings :</b><span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span>
                            <span className="bi bi-star-fill text-success"></span></p>
                        </CardBody>
                    </Card>
                </div>
              </Row>
            </Container>
        </>
    )
}

export default CardApp