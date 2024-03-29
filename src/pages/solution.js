import React, { useState,useEffect } from "react";
import { ListGroupItem, Card, ListGroup, Row, Col, Container, Form, Accordion} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"
import './solution.css'

function Solution() {

  const [data, setData] = useState([]);
  const [options, setOptions] = useState("הכל")
  const [showData, setShowdata] = useState([]);
  function projectChange(selected) {
    console.log(data);
    setOptions(selected);
        if(selected ==="הכל"){
          console.log(data)
          setShowdata(data);
          return 1;
        }
    let projectShow = []//local array that saves the project 
    for (let i = 0; i < data.length; i++) {
      if (selected ==='בעיות עם תיעוד'&&data[i].readyForm === true) {
        projectShow.push(data[i]);
      } 
      else if(selected ==='בעיות ללא תיעוד'&&data[i].readyForm === false ){
        projectShow.push(data[i]);
      }
    }
    setShowdata(projectShow);
  }
  function colorBystatus(index) {
    if(data.length==0){return 0;}
    if (showData[index].readyForm == true) {
      return "success"
    }
    else {
      return "danger"
    }
  }
  useEffect(() => {
    axios.get('/api/notes').then((res) => { setData(res.data);
      setShowdata(res.data)});
}, []);
  return (
<div>
    <Form>
    <Form.Group className="test">
            <Form.Label>סינון</Form.Label>
            <Form.Control
            className="testdrop"
              as="select"
              value={options}
              onChange={e => {
                  projectChange(e.target.value)
              }}
            >
              <option>הכל</option>
              <option>בעיות עם תיעוד</option>
              <option>בעיות ללא תיעוד</option>

            </Form.Control>
          </Form.Group>
      <Container fluid className='gx-0'>

        <Row xs={2} md={4} className='gx-0 row'>
          {showData.map((note, i) => (
            <Col className="column" xs={2} md={4}>
              <Card border={colorBystatus(i)} id={i} className="card layout" >
                <Card.Body>
                  <Card.Title>{note.id} מספר מזהה</Card.Title>
                  <ListGroup >
                    <ListGroupItem>משפחה ראשית: {note.mainFamily}</ListGroupItem>
                    <ListGroupItem>משפחה משנית: {note.secondFamily}</ListGroupItem>
                    <ListGroupItem>מ.א חבר תמיכה: {note.userNumber}</ListGroupItem>
                    <ListGroupItem>מ.א של לקוח: {note.clientNumber}</ListGroupItem>
                  <Accordion className="acordionfit">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                       תיאור הבעיה:
                      </Accordion.Header>
                      <Accordion.Body className="acordionfit">
                          {note.description}
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item  eventKey="1">
                      <Accordion.Header>
                        פתרון הבעיה:
                      </Accordion.Header>
                      <Accordion.Body className="acordionfit">
                        {note.solution}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  </ListGroup>
                  <Card.Link href="#">edit</Card.Link>
                  <Card.Link href="#">open bigger</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}</Row>
        </Container >
    </Form>
    </div>
  )


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