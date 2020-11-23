/*!

=========================================================
* Argon Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import ProfileHeader from "components/Headers/ProfileHeader.js";

class Profile extends React.Component {
  render() {
    return (
      <>
        <ProfileHeader />
        <Container className="mt--6" fluid>
          <Row>
            <Col className="order-xl-1" xl="12  ">
              <Card>
                <CardHeader>
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Profil bearbeiten</h3>
                    </Col>
                    <Col className="text-right" xs="4">
                    Online Buchungen erhalten
                      <>

                      <label className="custom-toggle" htmlFor="input-showProfile">
                      <Input type="checkbox" id="input-showProfile"  />
                      <span className="custom-toggle-slider rounded-circle" />
                      </label>
                      <span className="clearfix" />
                      </>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Kontaktinformationen
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-drivingSchoolName"
                            >
                              Name der Fahrschule
                            </label>
                            <Input
                              defaultValue="[currentUser.drivingSchoolName]"
                              id="input-drivingSchoolName"
                              placeholder="Name der Fahrschule"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-email"
                            >
                              Email
                            </label>
                            <Input
                              id="input-email"
                              placeholder="Email"
                              defaultValue="[currentUser.email]"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-first-name"
                            >
                              Vorname
                            </label>
                            <Input
                              defaultValue="[currentUser.firstName]"
                              id="input-first-name"
                              placeholder="Vorname"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-last-name"
                            >
                              Nachname
                            </label>
                            <Input
                              defaultValue="[currentUser.sureName]"
                              id="input-last-name"
                              placeholder="Nachname"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="pl-lg-4">
                      <Row>
                        <Col md="10">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-street"
                            >
                              Strasse
                            </label>
                            <Input
                              defaultValue="[currentUser.street]"
                              id="input-street"
                              placeholder="Strasse"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-houseNumber"
                            >
                              Hausnummer
                            </label>
                            <Input
                              defaultValue="[currentUser.houseNumber]"
                              id="input-houseNumber"
                              placeholder="Hausnummer"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="2">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-zipCode"
                            >
                              PLZ
                            </label>
                            <Input
                              defaultValue="[currentUser.zipCode]"
                              id="input-zipCode"
                              placeholder="Postleitzahl"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="7">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-city"
                            >
                              Stadt
                            </label>
                            <Input
                              defaultValue="[currentUser.city]"
                              id="input-city"
                              placeholder="Stadt"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="3">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-canton"
                            >
                              Kanton
                            </label>
                            <Input
                              id="input-canton"
                              placeholder="Kanton"
                              defaultValue="[instructor_information.currentUser.canton]"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Informationen über die Fahrschule</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label className="form-control-label">Über mich</label>
                        <Input
                          placeholder="Ein paar Worte über mich"
                          rows="4"
                          type="textarea"
                          defaultValue="[instructor_information/currentUser.aboutMe]"
                        />
                      </FormGroup>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-priceOneLesson"
                            >
                              Preis pro Fahrstunde
                            </label>
                            <Input
                              defaultValue="[instructor_information/currentUser/priceOneLesson]"
                              id="input-priceOneLesson"
                              placeholder="Preis pro Fahrstunde"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-priceTenLessons"
                            >
                              Preis pro 10er Abonnement
                            </label>
                            <Input
                              defaultValue="[instructor_information/currentUser/priceTenLessons]"
                              id="input-priceTenLessons"
                              placeholder="Preis for 10er Abonnement"
                              type="number"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-carManualGear"
                            >
                              Fahrzeug Geschalten
                            </label>
                            <Input
                              defaultValue="[instructor_information/currentUser/carManualGear]"
                              id="input-carManualGear"
                              placeholder="Fahrzeug Geschalten"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-carAutomaticGear"
                            >
                              Fahrzeug Automatik
                            </label>
                            <Input
                              defaultValue="instructor_information/currentUser/carAutomaticGear"
                              id="input-carAutomaticGear"
                              placeholder="Fahrzeug Automatik"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>                    
                    </div>
                    {/*<hr className="my-4" />
                    <h6 className="heading-small text-muted mb-4">Bilder</h6>
                    <div className="pl-lg-4">
                      <FormGroup>
                        <label className="form-control-label">Profilbild</label>
                        <Input
                          placeholder="Ein paar Worte über mich"
                          rows="4"
                          type="text"
                          defaultValue="[instructor_information/currentUser.aboutMe]"
                        />
                      </FormGroup>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-priceOneLesson"
                            >
                              Gallerie
                            </label>
                            <Input
                              defaultValue="[instructor_information/currentUser/priceOneLesson]"
                              id="input-priceOneLesson"
                              placeholder="Preis pro Fahrstunde"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>                    
    </div>*/}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
