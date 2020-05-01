import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import "./card.css";



function ContentCard(props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="cardContainer">
      <h2> {props.card.title} </h2>
      <p>
        &copy; {props.card.copyright}
        Date: {props.card.date}
      </p>
      <div>
        <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>About this Photo</Button>
        <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <p className="explaination"> {props.card.explanation} </p>
          </CardBody>
        </Card>
      </Collapse>
    </div>
      <img
        className="mainContent"
        src={props.card.url}
        alt="Astronomy Pic of the Day"
      />
    </div>
  );
}
export default ContentCard;
