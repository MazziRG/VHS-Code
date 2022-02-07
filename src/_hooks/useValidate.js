import { useState } from "react";

// HOOK to  validate feilds
const useValidate = ()=>{
    const [invalid, setInvalid] = useState(false)
    const onValidate = (value)=>{!value? setInvalid(true) : setInvalid(false)};
    return [invalid, (e)=>onValidate(e.target.value)]
}

export default useValidate