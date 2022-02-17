import React, { useState, useRef } from "react";
import { Form, Button, Spinner, Overlay } from 'react-bootstrap'
import axios from "axios"
import './signup.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp() {
  const HeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  const [personalNumber, setPersonalNumber] = useState('');//
  const [namaUser, setNamaUser] = useState(false);
  const [clearance, setClearnce] = useState('בלמ"ס');
  const [pnumber, setPnumber] = useState('');
  const [fname, setFname] = useState('');
  const [unit, setUnit] = useState('');
  const [spinner, setSpinner] = useState(true)
  const [show, setShow] = useState(false);


  const [msgColor, setColor] = useState('rgb(144, 238, 144)')
  const [errorMsg, setErrormsg] = useState('נרשם בהצלחה')
  const target = useRef(null);
  const submitHandler = async (e) => {
    e.preventDefault();
    setSpinner(false);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/users', {
        personalNumber, namaUser, clearance, pnumber, fname, unit
      },
        config
      );
      setErrormsg('נרשם בהצלחה')
      setSpinner(true)
      setShow(true)
      setColor('rgb(144, 238, 144)')
    }
    catch (error) {
      console.log(error);
      setErrormsg(error.message)
      setColor('rgb(255,0,0)')

      setSpinner(true);
      setShow(true)

    }

  }

  return (
    <div>
      <Form className="Form-Register" onSubmit={submitHandler}>
        <Form.Label style={HeaderStyle}>
          הוספת משתמש
        </Form.Label>
        <Form.Group controlId="formGridEmail">
          <Form.Label>מספר אישי </Form.Label>
          {/* need to validate up to 9 numbers*/}
          <Form.Control onChange={(e) => setPersonalNumber(e.target.value)} value={personalNumber} type="" placeholder="הכנס מספר אישי" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            value={namaUser}

            onChange={(e) => setNamaUser(!namaUser)}
            type="checkbox"
            id="customControlAutosizing"
            label="צוות נמה ?"
          />
        </Form.Group>
        <Form.Group controlId="formBasicSelect">
          <Form.Label>סיווג</Form.Label>
          <Form.Control
            as="select"
            value={clearance}
            onChange={e => {

              setClearnce(e.target.value);
            }}
          >
            <option>בלמ"ס</option>
            <option>מוגבל</option>
            <option>שמור</option>
            <option>סודי</option>
            <option>סודי ביותר</option>


          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>מספר טלפון </Form.Label>
          <Form.Control placeholder="" value={pnumber} onChange={(e) => setPnumber(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridCity">
          <Form.Label>שם</Form.Label>
          <Form.Control value={fname} onChange={(e) => setFname(e.target.value)} placeholder="שם פרטי ומשפחה" />
        </Form.Group>

        <Form.Group controlId="formGridCity">
          <Form.Label>יחידה</Form.Label>
          <Form.Control value={unit} onChange={(e) => setUnit(e.target.value)} />
        </Form.Group>
        <Button className="Button" ref={target} variant="primary" type="submit">
          <Spinner

            hidden={spinner}
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
          הוסף
        </Button>

        <Overlay target={target.current} show={show} placement="right">
          {({ placement, arrowProps, show: _show, popper, ...props }) => (
            <div
              {...props}
              style={{
                backgroundColor: msgColor,
                padding: '2px 6px',
                color: 'white',
                borderRadius: 5,
                ...props.style,
              }}
            >
              {errorMsg}
            </div>
          )}
        </Overlay>
      </Form>
    </div>
  )
}

export default SignUp;