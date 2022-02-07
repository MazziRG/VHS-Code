import {useContext, createContext, useState} from 'react';



const FormContext = createContext();

// Creates a Context Provider to manage state
export const FormProvider = (props)=>{


    const [state, setState]=useState({
        "toggle":false,
        "setToggle": update=>{setState({...state, "toggle":update})},
        "setError": (error)=>setState({...state, error:error}),
        "error":false
    })

    return(
        <FormContext.Provider value={state}>
            {props.children}
        </FormContext.Provider>
    )
}

// Handles import of useContext and FormContext for children
export const useFormContext = () => useContext(FormContext);

