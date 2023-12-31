import React from "react";
import { Container } from "react-bootstrap";
import Preview from "../Preview/Preview";
import About from "../About/About";

const Main = () => {
  return (
    <main>
      <Container>
        <Preview />
        <About />
      </Container>
    </main>
  );
};

export default Main;
