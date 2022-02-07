
import useValidate from '../../../_hooks/useValidate'
import {useFormContext} from "../../../_hooks/useFormContext"

import styled from '@emotion/styled'
import{Label, Wrapper, ErrorMessage} from "../../../_css/GlobalElements"

const Input =styled.textarea`
  min-width: 288px;
  min-height: 70px;
  padding: 10px 16px;
  outline: none;
  font-size: 16px;
  border-color: ${({invalid})=>invalid && "hsla(355, 77%, 52%, 1)"}
`

const TextArea=({required , label, defaultValue})=> {
  const {setError} = useFormContext()
  const [invalid, onValidate] =  useValidate()

  const outOfFocus =(e)=>{
    setError(e, invalid)
    onValidate(e)
  }

  return( 
    <Wrapper data-testid={label}>
      <Label>Bio*</Label>
      <Input
        data-testid="textarea"
        defaultValue={defaultValue[label]}
        name={label}         
        onBlur={(e)=>required  && outOfFocus(e)}
        invalid={invalid}/>
      {invalid && <ErrorMessage>This Feild is requerd</ErrorMessage>}
    </Wrapper>
  )
}

export default TextArea;
