// import ReactDom from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Data } from "./Data";

function Cards() {
  return (
    <div className="flex mx-2">
      {Data.map((item, index) => (
        <Card className="mycard2 mx-2 my-4 shadow-md overflow-x-auto" key={index} style={{ maxwidth: "18rem" }}>
          <Card.Img variant="top" src={item.thumbnail} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text className="flex my-2 justify-between">
              <Card.Text>
                <Card.Text className="font-bold text-lg">Floor</Card.Text>
                <Card.Text>0.10 MATIC</Card.Text>
              </Card.Text>
              <Card.Text>
                <Card.Text className="font-bold text-lg">24h Volume</Card.Text>
                <Card.Text>2 ETH</Card.Text>
              </Card.Text>
            </Card.Text>
            {/* <Button variant="primary">Go Somewhere</Button> */}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;
