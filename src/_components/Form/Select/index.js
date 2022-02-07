import {useState} from 'react';
import styled from '@emotion/styled'
import ScrollIcon from "../.././../_assets/scroll.svg"


const Wrapper = styled.div`
    width: fit-content;
    position:relative;
    margin: 5px 0;
    color: hsla(208, 100%, 97%, 0.64);
    font-size: 14px;
`

const Select = styled.div`
    display: flex;
    Justify-content: space-between;
    border: 1px solid hsla(208, 100%, 97%, 0.32);
    box-sizing: border-box;
    background: rgba(240, 248, 255, 0.04);
    border-radius: 5px;
    min-height: 34px;
    padding: 8px 8px 8px 14px;
    cursor: pointer;
    min-width: 100px;
    &:hover{
        border-color: hsla(208, 100%, 97%, 1);
    }
    border-color: ${({open})=>open && "hsla(163, 64%, 42%, 1)"}    
`;

const I = styled.img`
    padding: 0;
    margin-left: 10px;
    transform: rotate(${({open})=>open && "0.5turn"});
`;


const Menu = styled.ul`
    position:absolute;
    box-sizing: border-box;
    right:0;
    left:0;
    top: 80%;
    background: hsla(215, 9%, 25%, 1);
    border-radius: 5px;
    border: 1px solid hsla(208, 100%, 97%, 0.32);
    padding: 0;
    height: ${({open})=>open? "200px": 0};
    visibility:${({open})=>open? "visible": "hidden"};
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 5px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: hsla(208, 100%, 97%, 0.12);
        border-radius: 5px;
      }
    transition: 
        height 500ms ease-in-out, 
        visibility 500ms ease-out ;

`;


const Option = styled.li`
    appearance: none;
    list-style: none;
    padding: 5px 14px;
    cursor: pointer;
    &:hover{
        background: rgba(240, 248, 255, 0.1);
    }
`;


const DropdownMenu = ({options, name}) => {
    const [option, setOption] = useState(name)
    const [open, setOpen] = useState(false)
    
    
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
