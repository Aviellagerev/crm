import React, { useState } from 'react'
import {Form,Button,FloatingLabel} from 'react-bootstrap'
import DatePicker from 'react-date-picker'
import './faultform.css'
function FaultForm() {
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
<Form className="mb-3 Form">
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
            onChange={onChange}
            value={value}
            yearAriaLabel="Year"
          />
        </main>
     

   
 <Form.Label>משפחה ראשית</Form.Label>
   <Form.Select defaultValue='בלמ"ס'>
   </Form.Select> 
       


        
   <Form.Label>משפחה משנית</Form.Label>
   <Form.Select defaultValue='בלמ"ס'>
   </Form.Select>




    <Form.Label>מספר אישי (חבר הצוות)</Form.Label>
    <Form.Control placeholder="" />



    <Form.Label>מספר אישי (של הפונה)</Form.Label>
    <Form.Control placeholder="" />
 
    <Form.Group className="mt-3" style={Labelstlye}>
  <FloatingLabel size='lg' controlId="floatingTextarea2" label="פיתרון"  >
    <Form.Control
      as="textarea"
      placeholder="הקלד פיתרון כאן"
      style={{ height: '100px' }}
  
    />
  </FloatingLabel>
 </Form.Group>

<Button variant="primary" type="submit">
 הוסף
</Button>
</Form.Group>
</Form>
        </div>
    )
}

export default FaultForm;
