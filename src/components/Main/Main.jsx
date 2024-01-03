import React from "react";
import { Container } from "react-bootstrap";
import Preview from "../Preview/Preview";
import About from "../About/About";
import Services from "../Services/Services";

const Main = () => {
  return (
    <main>
      <Container>
        <Preview />
        <About />
        <Services />
      </Container>
    </main>
  );
};

export default Main;
