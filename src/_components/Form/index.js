import TextField from "./TextField";
import DateField  from "./DateField";
import TextArea  from "./TextArea";
import Button  from "./Button";
import ConfirmMessage  from "../ConfirmMessage";
import {useFormContext} from "../../_hooks/useFormContext"

import styled from '@emotion/styled'

const Form = styled.form`
  min-width: 350px;
  min-height: 700px;
`

const Forms = () => {
    const {error} = useFormContext

    // Placeholder values to test the page
    const defaultValues = {
        "First Name": "Mazzi",
        "Last Name":"Garcia",
        "Email": "Mazzi.Garcia98@gmail.com",
        "Phone":"123-456-7890",
        "Bio":"Deafult Values for VHS Coding Challange"
    }
   
    return (
        <Form data-testid="form" >
           { error? null: <ConfirmMessage />}
            <h3> Setting</h3>
            <TextField
                defaultValue={defaultValues}
                label="First Name"
                required
                />
                
            <TextField 
                defaultValue={defaultValues}
                label="Last Name"
                required
                />
            <TextField 
                defaultValue={defaultValues}
                label="Email"
                type="email"
                required
                />
            <TextField 
                defaultValue={defaultValues}
                label="Phone"
                type="tel"
                required
            
            />

            <DateField required />
            <TextArea
                defaultValue={defaultValues} 
                label="Bio" 
                required
            />

            <hr style={{marginTop: "20px"}}/>
            <div>

            <Button 
                type="Submit"
                label="Save Changes"
                backdrop="submit"/>
            <Button 
                label="Discard"
            />
            </div>
        </Form>
  )
};

export default Forms;
