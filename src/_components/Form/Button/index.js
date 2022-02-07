import React from 'react';
import styled from '@emotion/styled'

import {useFormContext} from "../../../_hooks/useFormContext"


const Button = styled.button`
    margin-right: 20px;
    background:${
        ({backdrop})=>
            backdrop === "submit"?
            "linear-gradient(90deg, #27B18A 0%, #317D6C 100%)":
            "hsla(208, 100%, 97%, 0.32)"
    };
    border: none;
    color: #F0F8FF;
    font-weight: 700;

`

const _Button = ({ label, backdrop}) => {
    const {setToggle, error, toggle,} = useFormContext()

    const handleClick=(e)=>{
        e.preventDefault();

        // delete all text from input
        if(label === "Discard"){
            const i= document.querySelectorAll("input")
            i.forEach(i=>i.value ="")
            document.querySelector("textarea").value=""
            return ;
        };
        
        //  Toggels succes message is ther are no missing feilds 
        if(error)return;
        !toggle && setToggle(true)
        setTimeout(() => {
            !toggle && setToggle(false)
        }, 3000);
    };


return (
    <Button
    data-testid="button"
    backdrop={backdrop}
    onClick={(e)=>handleClick(e)}>
        {label}
    </Button>
    );
};


export default _Button;
