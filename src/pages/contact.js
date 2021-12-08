import React, { useState } from 'react';
import {Form,Button,FloatingLabel} from 'react-bootstrap';
import DatePicker from 'react-date-picker';
function Contact() {
    const [value, onChange] = useState(new Date());
    const Labelstlye={
        direction:'rtl',
        textAlign: 'right',
        width:'90'
    }
    const HeaderStyle={
        fontSize: '20px',
        fontWeight: 'bold',

    }
    return (
        <div>
        
        {/*need to add an id number with uuid package in the file in the data base*/}
        <Form className="mb-3 Form">
            
        <Form.Group className="mb-3">
                <Form.Label style={HeaderStyle}>
                    טופס פניות/תלונות
                    </Form.Label>
            <Form.Label>מספר אישי (חבר הצוות)</Form.Label>
            <Form.Control placeholder="" />

            <Form.Label>מספר אישי (של הפונה)</Form.Label>
            <Form.Control placeholder="" />
         
            <Form.Group className="mt-3" style={Labelstlye}>
          <FloatingLabel size='lg' controlId="floatingTextarea2" label="תיאור"  >
            <Form.Control
              as="textarea"
              placeholder="הקלד פיתרון כאן"
              style={{ height: '100px' }}
          
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
                    onChange={onChange}
                    value={value}
                    yearAriaLabel="Year"
                  />
                </main>
             


        <Button variant="primary" type="submit">
         הוסף
        </Button>
        </Form.Group>
        </Form>
                </div>
    );
};

export default Contact;
