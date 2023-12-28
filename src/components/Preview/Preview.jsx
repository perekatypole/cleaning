import React from "react";
import Row from "react-bootstrap/Row";
import Column from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Image from "react-bootstrap/Image";
import medal from "../../images/main/medal.svg";
import medal_bck from "../../images/main/medal_bck.svg";
import star from "../../images/main/star.svg";
import rush from "../../images/main/rush.svg";

const Preview = () => {
  return (
    <Row className="main-preview">
      <Column>
        <Row className="warranties flex-column">
          <Column sm={6} className="position-relative">
            <Image src={medal} className="position-absolute top-50 start-50" />
            <Image src={medal_bck} />
          </Column>
          <Column></Column>
          <Column></Column>
        </Row>
      </Column>
      <Column>
        <Row className="employees flex-column">
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </Row>
      </Column>
      <Column>
        <Row className="fast flex-column">
          <Column></Column>
          <Column></Column>
          <Column></Column>
        </Row>
      </Column>
    </Row>
  );
};

export default Preview;
