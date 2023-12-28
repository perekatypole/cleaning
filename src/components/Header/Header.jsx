import React from "react";
import Navibar from "../Navibar/Navibar";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Logo from "../Logo/Logo";
import { useResize } from "../resize/resize";

const Header = () => {
  return (
    <header>
      <Container className="header-container">
        <Row className={useResize() < 768 ? "text-center" : ""}>
          <Column>
            <Logo />
            <button className="header-button">закажи клининг</button>
          </Column>
          <Column>
            <Navibar />
          </Column>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
