import { getByLabelText, render, screen } from '@testing-library/react';
import {Form, ConfirmMessage} from "../_components"
import App  from '../App'

describe("Renders and test All <Form/> inputs ", ()=>{


    it("Did inputs render",()=>{
        const {getAllByTestId} = render(<App />);
        const inputs = getAllByTestId("input")
        expect(inputs).toBeTruthy()
    })

    it("Did First Name input render",()=>{
        const {getByTestId} = render(<App />);
        const first_name = getByTestId(/first name/i) 
        expect(first_name).toBeTruthy()
    })

    it("Did Last Name input render",()=>{
        const {getByTestId} = render(<App />);
        const last_name = getByTestId(/last name/i) 
        expect(last_name).toBeTruthy()

    })
    it("Did Phone inpute render ",()=>{
        const {getByTestId} = render(<App />);
        const phone = getByTestId(/phone/i) 
        expect(phone).toBeTruthy()

    })
    it("Did Email input render",()=>{
        const {getByTestId} = render(<App />);
        const email = getByTestId(/email/i) 
        expect(email).toBeTruthy()

    })
    it("Did Bio input render",()=>{
        const {getByTestId} = render(<App />);
        const dateField = getByTestId(/dates/i)
        expect(dateField).toBeTruthy()

    })
    it("Did Bio input render",()=>{
        const {getByTestId} = render(<App />);
        const bio = getByTestId(/bio/i)
        expect(bio).toBeTruthy()

    })

})