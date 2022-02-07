import styled from '@emotion/styled'

// Css
export const Wrapper = styled.div`
    width: fit-content;
    position:relative;
    margin: 5px 0;
    color: hsla(208, 100%, 97%, 0.64);
    font-size: 14px;
`

export const Select = styled.div`
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

export const I = styled.img`
    padding: 0;
    margin-left: 10px;
    transform: rotate(${({open})=>open && "0.5turn"});
`;


export const Menu = styled.ul`
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


export const Option = styled.li`
    appearance: none;
    list-style: none;
    padding: 5px 14px;
    cursor: pointer;
    &:hover{
        background: rgba(240, 248, 255, 0.1);
    }
`;
