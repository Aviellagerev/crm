import React, { useState} from "react";
import { ListGroupItem, Card, ListGroup } from "react-bootstrap";
import axios from "axios"
function Solution() {
  const [data, setData] = useState([]);

    axios.get('/api/notes').then((res) => { setData(res.data) })



  return data.map((note) => (
    <Card className="Form-solution">
      <Card.Body>
        <Card.Title>{note.id} מספר מזהה</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>משפחה ראשית: {note.mainFamily}</ListGroupItem>
        <ListGroupItem>משפחה משנית: {note.secondFamily}</ListGroupItem>
        <ListGroupItem>מ.א חבר תמיכה: {note.userNumber}</ListGroupItem>
        <ListGroupItem>מ.א של לקוח: {note.clientNumber}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Text>
                  פתרון: {note.solution}   
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">edit</Card.Link>
        <Card.Link href="#">open bigger</Card.Link>
      </Card.Body>
    </Card>
  ))
  // var notes = data
  //     return( 
  //    {data.map((note) =>(

  // <Card style={{ width: '18rem' }}>
  //   <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  //   <Card.Body>
  //     <Card.Title>{note.id}</Card.Title>
  //   </Card.Body>
  //   <ListGroup className="list-group-flush">
  //     <ListGroupItem>{note.mainFamily}</ListGroupItem>
  //     <ListGroupItem>{note.secondFamily}</ListGroupItem>
  //     <ListGroupItem>{note.userNumber}</ListGroupItem>
  //   </ListGroup>
  //   <Card.Body>
  //   <Card.Text>
  //      {note.solution}
  //     </Card.Text>
  //   </Card.Body>
  //   <Card.Body>
  //     <Card.Link href="#">edit</Card.Link>
  //     <Card.Link href="#">open bigger</Card.Link>
  //   </Card.Body>
  // </Card>
  //    ))}
  //     )
}
export default Solution