import {useState} from 'react';

import {Wrapper, Select, I , Menu, Option} from "./indexStyles"
import ScrollIcon from "../.././../_assets/scroll.svg"



const DropdownMenu = ({options, name}) => {
    const [option, setOption] = useState(name)
    const [open, setOpen] = useState(false)

    // is used to map out all selected options
    const renderOptions =(option)=> <Option key={option} onClick={()=>setOption(option)}> {option} </Option>;

    return( 
        <Wrapper>
            <Select 
                onClick={()=>setOpen(!open)} 
                open={open}
            >
                <span>{option}</span>
                <I src={ScrollIcon} open={open}/>
            </Select>
            
            <Menu 
                onMouseLeave={()=>setOpen(false)} 
                open={open}
            >
                {options.map(renderOptions)}
            </Menu>
        </Wrapper>
    );
};

export default DropdownMenu;
