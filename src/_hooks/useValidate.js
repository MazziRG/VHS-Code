import { useState } from "react";

// HOOK NOT IN USE
const useValidate = ()=>{
    const [invalid, setInvalid] = useState(false)
    const onValidate = (value)=>{!value? setInvalid(true) : setInvalid(false)};
    return [invalid, (e)=>onValidate(e.target.value)]
}

export default useValidate