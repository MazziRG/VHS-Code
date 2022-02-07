import {useRef} from 'react';

import styled from '@emotion/styled'
import{Label , ErrorMessage, Wrapper} from "../../../_css/GlobalElements"
import {useFormContext} from "../../../_hooks/useFormContext"
import useValidate from '../../../_hooks/useValidate'

const Input =styled.input`
  min-width: 288px;
  box-sizing: border-box;
  outline: none;
  font-size: 1rem;
  border-color: ${({invalid})=>invalid && "hsla(355, 77%, 52%, 1)"}
`


const TextFeild = ({label = "Insert Title", required, defaultValue, type })=> {

  const ref = useRef()
  const {setError} = useFormContext()
  // custom validation hook
  const [invalid, onValidate, setInvalid] =  useValidate()

  // valididates field after ur out of focus of input
  const outOfFocus =(e)=>{
    const value = ref.current.value;
    const email = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,3}/i;
    const phone = /\d{3}-?\d{3}-?\d{4}/
 
    // Email validation
    if(type === "email" && !value.match(email)){
      setInvalid(true)
      setError(true)
      return;
    }
    // Phone vildation
    if(type === "tel" && !value.match(phone)){
      setInvalid(true)
      setError(true)
      return;
    }
    onValidate(e)
    setError(e)
  }
  
  return( 
    <Wrapper data-testid={label} >
      <Label>{label}*</Label>
      <Input
        ref={ref}
        data-testid="input"
        defaultValue={defaultValue[label]}
        name={label}
        onBlur={(e)=>required  && outOfFocus(e)}
        invalid={invalid}
        type={type}
        id="input"
      />
      {invalid && <ErrorMessage>This Feild is requerd</ErrorMessage>}
    </Wrapper>
  )
}

export default TextFeild;
