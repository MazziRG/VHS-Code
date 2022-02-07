import React from 'react';
import styled from '@emotion/styled'
import Check from "../../_assets/check.svg"
import { useFormContext } from "../../_hooks/useFormContext";

const PopUp = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  background: 
  linear-gradient(89.97deg, rgba(39, 177, 138, 0.38) 0%, rgba(39, 177, 138, 0.68) 114.46%),
  linear-gradient(0deg, #2A2E35, #2A2E35);
  font-weight: bold;
  font-size: 15px;
  line-height: 24px;
  color: #FFFFFF;
  transition: all 1s ease-in-out;
  height:44px;
  transform: ${({toggle})=>toggle? "translateY(0px)": "translateY(-44px)"};


`;

// Success Message after you Click Save Changes
const ConfimMessage = () => {
  const {toggle} = useFormContext()
  return (
  <PopUp toggle={toggle}>
    <img src={Check} alt='check'/><span>Changes have been saved successfully </span>
  </PopUp>);
};

export default ConfimMessage;
