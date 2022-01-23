import React, { useState, useRef } from 'react'
import { Form, Button, FloatingLabel, Spinner, Overlay } from 'react-bootstrap'
import axios from "axios"
import DatePicker from 'react-date-picker'
import './faultform.css'
function FaultForm() {
  const [date, dateChange] = useState(new Date());
  const [mainFamily, mainChange] = useState('');
  const [secondFamily, secondChange] = useState('');
  const [userNumber, userNumberChange] = useState('');
  const [clientNumber, clientNumberChagne] = useState('');
  const [solution, solutionChange] = useState('');

  const [spinner, setSpinner] = useState(true)
  const [show, setShow] = useState(false);

  const [msgColor, setColor] = useState('rgb(144, 238, 144)')
  const [errorMsg, setErrormsg] = useState('נרשם בהצלחה')
  const target = useRef(null);

  const Labelstlye = {
    direction: 'rtl',
    textAlign: 'right',
    width: '90'
  }
  const HeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',

  }
  const submitHandler = async (e) => {
    e.preventDefault();
    setSpinner(false);

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post('/api/forms', {
        date, mainFamily, secondFamily, userNumber, clientNumber, solution
      },
        config
      );

      setSpinner(true)
      setShow(true)
      setColor('rgb(144, 238, 144)')
      console.log(msgColor)
    }
    catch (error) {
      setErrormsg(error.message)
      setColor('rgb(255,0,0)')

      setSpinner(true);
      setShow(true)


    }

  }

  function selectArray() {
    var optionarray = []
    switch (mainFamily) {
      case 'אחר':
        optionarray = ["אחר", "ממשקים", "פרוייקטים"];
        break;

      case "טפסים":
        optionarray = ["הפקת לקחים"
          , "הצעות ייעול", `נסיעה לחו"ל`
          , "נתוני אחזקה", "ערכת ניסוי"
          , "פקודות רכש", "פקודות רכש להעברה"]
        break;
      case 'מנהלן':
        optionarray = ["העברת בעלות", "הרשאות", "מיילים", "מעבר למוד ", "משתמש חדש", "קבוצה חדשה", "קבוצת רכש", ",תהליכים חדשים"]
        break;
      case 'מסמכים':
        optionarray = ["פרוייקטים", "קומפיגורציה"]
        break;
      case `נמ"ה לא עובדת`:
        optionarray = ["מחשב", "שרת"]
        break;
      case "רכש":
        optionarray = ["דרישות רכב", "היערות רכש", "מפרטי רכש ", "פקודות רכש"]
        break;
      case "תהליכים":
        optionarray = ["אתחול תהליך", "בעיות שיבוץ", "מחיקת תהליך", "סגירת תהליך", "תהליך קבוע"]
        break;
      case `תיב"ם`:
        optionarray = ["הפקעות תקועות", "שחרורים"]
        break;
    }
    return optionarray;

  }

  return (

    <div>
      <Form className="mb-3 Form" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label style={HeaderStyle}>
            הוסף תקלה
          </Form.Label>
          <main className="Sample__container__content">
            <DatePicker
              calendarAriaLabel="Toggle calendar"
              clearAriaLabel="Clear value"
              dayAriaLabel="Day"
              monthAriaLabel="Month"
              nativeInputAriaLabel="Date"
              onChange={dateChange}
              value={date}
              yearAriaLabel="Year"
            />
          </main>

          <Form.Group controlId="formBasicSelect">
            <Form.Label>משפחה ראשית</Form.Label>
            <Form.Control
              as="select"
              value={mainFamily}
              onChange={e => {

                mainChange(e.target.value);
              }}
            >
              <option>אחר</option>
              <option>טפסים</option>
              <option>מנהלן</option>
              <option>מסמכים</option>
              <option>נמ"ה לא עובדת</option>
              <option>רכש</option>
              <option>תהליכים</option>
              <option>תיב"ם</option>



            </Form.Control>
          </Form.Group>
          <Form.Group controlId="secondselect">
            <Form.Label>משפחה משנית</Form.Label>

            <Form.Control
              as="select"
              value={secondFamily}
              onChange={e => {

                secondChange(e.target.value);
              }}

            >
              {selectArray().map(item => {
                return (<option key={item.value} value={item.value}>{item}</option>);
              })}



            </Form.Control>
          </Form.Group>

          <Form.Label>מספר אישי (חבר הצוות)</Form.Label>
          <Form.Control placeholder="" value={userNumber} onChange={(e) => { userNumberChange(e.target.value) }} />

          <Form.Label>מספר אישי (של הפונה)</Form.Label>
          <Form.Control placeholder="" value={clientNumber} onChange={(e) => clientNumberChagne(e.target.value)} />

          <Form.Group className="mt-3" style={Labelstlye}>
            <FloatingLabel size='lg' controlId="floatingTextarea2" label="פיתרון"  >
              <Form.Control
                as="textarea"
                placeholder="הקלד פיתרון כאן"
                style={{ height: '100px' }}
                value={solution}
                onChange={(e) => solutionChange(e.target.value)}

              />
            </FloatingLabel>
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
        </Form.Group>
      </Form>
    </div>
  )
}

export default FaultForm;
