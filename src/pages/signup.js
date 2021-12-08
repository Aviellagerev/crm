import React from "react";
import {Form , Button} from 'react-bootstrap'
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function SignUp() {
  const HeaderStyle={
    fontSize: '20px',
    fontWeight: 'bold',
}
    return (
     <div>
    <Form className="Form-Register">
    <Form.Label style={HeaderStyle}>
                    הוספת משתמש 
      </Form.Label>
    <Form.Group controlId="formGridEmail">
      <Form.Label>מספר אישי </Form.Label>
     {/* need to validate up to 9 numbers*/}
      <Form.Control type="email" placeholder="הכנס מייל" />
    </Form.Group>
    <Form.Group className="mb-3">
  <Form.Check
        type="checkbox"
        id="customControlAutosizing"
        label="צוות נמה ?"
      />
    </Form.Group>
  <Form.Group  controlId="formGridState">

      <Form.Label>סיווג</Form.Label>
      <Form.Select defaultValue='בלמ"ס'>
        <option>בלמ"ס</option>
        <option>מוגבל</option>
        <option>שמור</option>
        <option>סודי</option>
        <option>סודי ביותר</option>
      </Form.Select>

    </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>מספר טלפון </Form.Label>
    <Form.Control placeholder="" />
  </Form.Group>

    <Form.Group controlId="formGridCity">
      <Form.Label>שם</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group controlId="formGridCity">
      <Form.Label>יחידה</Form.Label>
      <Form.Control />
    </Form.Group>
  <Button variant="primary" type="submit">
    הוסף
  </Button>
</Form>
     </div>
    )
}

export default SignUp;