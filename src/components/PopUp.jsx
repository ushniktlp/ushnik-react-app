import React, { useState } from "react";
import { Modal, Tab, Nav, Row, Col, Fade, Form } from "react-bootstrap";
import PopUpData from "../data/PopUpData";
import pythonaimlimage from "../images/pythonaiml.jpg";
import CustomButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

const IMAGES = {
  //"socanalyst.jpg": socimage,
  "pythonaiml.jpg": pythonaimlimage,
};

const PopUpModal = ({ show, onHide }) => {
  const navigate = useNavigate();

  const [activeKey, setActiveKey] = useState("pythonaiml");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [refCode, setRefCode] = useState("");

  const generateReferral = () => {
    if (!name || !phone) {
      alert("Please enter name and phone");
      return;
    }
    const clean = name.replace(/[^a-zA-Z]/g, "").toUpperCase();
    const last4 = phone.slice(-4);
    const rand = Math.floor(100 + Math.random() * 900);
    setRefCode(`${clean}${last4}${rand}`);
  };

  //const soc = PopUpData.tabs.find((t) => t.id === "soc");
  const pythonaiml = PopUpData.tabs.find((t) => t.id === "pythonaiml");
  const refer = PopUpData.tabs.find((t) => t.id === "refer");

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      animation={true}
      dialogClassName="animate__animated animate__fadeInDown"
    >
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold">Programs & Offers</Modal.Title>
      </Modal.Header>

      <Tab.Container activeKey={activeKey} onSelect={(k) => setActiveKey(k)}>
        {/* Tabs */}
        <Nav variant="tabs" className="px-3 pt-2">
          {PopUpData.tabs.map((tab) => (
            <Nav.Item key={tab.id}>
              <Nav.Link
                eventKey={tab.id}
                className={tab.id === "refer" ? "refer-tab" : ""}
              >
                {tab.label}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Modal.Body>
          <Tab.Content>
            {/* TAB 1 */}
            <Tab.Pane eventKey="pythonaiml">
              <Fade in={activeKey === "pythonaiml"}>
                <div>
                  <Row className="align-items-center">
                    <Col lg={7}>
                      <h4 className="fw-bold mb-3">{pythonaiml.title}</h4>
                      <p>
                        <strong>📅 Schedule:</strong> {pythonaiml.schedule}
                      </p>
                      <p>
                        <strong>⏰ Timing:</strong> {pythonaiml.timing}
                      </p>
                      <p>
                        <strong>📍 Mode:</strong> {pythonaiml.mode}
                      </p>
                      <p>{pythonaiml.description}</p>
                      <div className="d-flex gap-3 flex-wrap">
                        <CustomButton href={pythonaiml.registerLink}>
                          Register Now
                        </CustomButton>

                        <CustomButton
                          onClick={() => navigate("/courses/python-for-ai-ml")}
                        >
                          What is this program?
                        </CustomButton>
                      </div>
                    </Col>

                    <Col lg={5} className="text-center mt-4 mt-lg-0">
                      <img
                        src={IMAGES[pythonaiml.image]}
                        alt="Python for AI/ML"
                        className="img-fluid rounded shadow"
                      />
                    </Col>
                  </Row>
                </div>
              </Fade>
            </Tab.Pane>

            {/* TAB 2 */}
            <Tab.Pane eventKey="refer">
              <Fade in={activeKey === "refer"}>
                <div className="referandearn">
                  <h2 className="fw-bold mb-3" style={{ color: "black" }}>
                    Refer & Earn with USHNIK
                  </h2>

                  <p style={{ fontSize: "18px" }}>{refer.description}</p>
                  <strong>{refer.tnc}</strong>
                  <br />
                  <em>{refer.note}</em>

                  <Form className="mt-4">
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Enter Your First Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Example: Rahul"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold">
                        Enter Phone Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="+91 12345 67890"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </Form.Group>
                  </Form>

                  <CustomButton
                    width="280px"
                    onClick={generateReferral}
                    bg="#143264"
                    color="#ffffff"
                    className="fw-bold"
                  >
                    Generate My Referral Code
                  </CustomButton>

                  {/* <Button onClick={generateReferral}>
                    Generate My Referral Code
                  </Button> */}

                  {refCode && (
                    <div className="mt-3">
                      <p className="fw-bold mb-1">Your Referral Code:</p>
                      <div
                        style={{ color: "black" }}
                        className="p-2 border rounded bg-light fw-bold"
                      >
                        {refCode}
                      </div>
                    </div>
                  )}
                </div>
              </Fade>
            </Tab.Pane>
          </Tab.Content>
        </Modal.Body>
      </Tab.Container>
    </Modal>
  );
};

export default PopUpModal;
