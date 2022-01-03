import React from "react";
import { ListGroupItem, Card,ListGroup} from "react-bootstrap";

function Solution(){
    return( 
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Id of solution</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>object type </ListGroupItem>
    <ListGroupItem>Family</ListGroupItem>
    <ListGroupItem>nama user to give answer</ListGroupItem>
  </ListGroup>
  <Card.Body>
  <Card.Text>
     solution
    </Card.Text>
  </Card.Body>
  <Card.Body>
    <Card.Link href="#">edit</Card.Link>
    <Card.Link href="#">open bigger</Card.Link>
  </Card.Body>
</Card>

    )
}
export default Solution