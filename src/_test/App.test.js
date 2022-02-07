import { render, screen } from '@testing-library/react';

import App  from '../App'

describe("Renders all Componets on screen", ()=>{

    it("Renders Form Component",()=>{
        const {getByTestId} = render(<App />);
        const form = getByTestId("form")
        expect(form).toBeTruthy();

    })
    
    it("Renders Avatar component",()=>{
        const {getByTestId} = render(<App />);
        const avatar = getByTestId("avatar")
        expect(avatar).toBeTruthy();
    })

})


