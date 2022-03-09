import React, { useState, useRef } from 'react';
import { Form, Button, FloatingLabel, Spinner, Overlay } from 'react-bootstrap';
import DatePicker from 'react-date-picker';
import axios from 'axios';
import './complain.css'
function Complain() {

  const Labelstlye = {
    direction: 'rtl',
    textAlign: 'right',
    width: '90'
  }
  const HeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',

  }
  const [readyForm,setForm] = useState(false);
  const [personalNumber, setPersonal] = useState('');
  const [clientNumber, setClietnumber] = useState('');
  const [solution, setSolution] = useState('');
  const [date, setDate] = useState(new Date());
  const [spinner, setSpinner] = useState(true)
  const [description, setDescription] = useState('')
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
      const { data } = await axios.post('/api/contacts', {
        personalNumber, clientNumber, description, solution, date,readyForm
      },
        config
      );

      setSpinner(true)
      setShow(true)
      setColor('rgb(144, 238, 144)')
    }
    catch (error) {
      setErrormsg(error.message)
      setColor('rgb(255,0,0)')

      setSpinner(true);
      setShow(true)

    }

  }
  return (
    <div>

      {/*need to add an id number with uuid package in the file in the data base*/}
      <Form className="mb-3 Form" onSubmit={submitHandler}>
        <Form.Label style={HeaderStyle}>
          טופס פניות/תלונות
        </Form.Label>
        <Form.Group className="mb-3">


          <Form.Label>מספר אישי (חבר הצוות)</Form.Label>
          <Form.Control placeholder="" onChange={(e) => setPersonal(e.target.value)} value={personalNumber} />

          <Form.Label>מספר אישי (של הפונה)</Form.Label>
          <Form.Control placeholder="" onChange={(e) => setClietnumber(e.target.value)} value={clientNumber} />

          <Form.Group className="mt-3" style={Labelstlye}>
            <FloatingLabel size='lg' controlId="floatingTextarea2" label="תיאור"  >
              <Form.Control
                as="textarea"
                placeholder="הקלד תיאור כאן"
                style={{ height: '100px' }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mt-3" style={Labelstlye}>
            <FloatingLabel size='lg' controlId="floatingTextarea2" label="פיתרון"  >
              <Form.Control
                as="textarea"
                placeholder="הקלד פיתרון כאן"
                style={{ height: '100px' }}
                onChange={(e) => setSolution(e.target.value)}
                value={solution}
              />
            </FloatingLabel>
          </Form.Group>

          <main className="Sample__container__content">
            <DatePicker
              calendarAriaLabel="Toggle calendar"
              clearAriaLabel="Clear value"
              dayAriaLabel="Day"
              monthAriaLabel="Month"
              nativeInputAriaLabel="Date"
              onChange={setDate}
              value={date}
              yearAriaLabel="Year"
            />
          </main>
            {console.log(readyForm)}
          <Form.Check
            type="switch"
            id="custom-switch"
            label="הכתיבה הסתיימה?"
            value={readyForm}
            onChange={(e) => setForm(!readyForm)}
          />
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
        </Form.Group>
      </Form>
    </div>
  );
};

export default Complain;
