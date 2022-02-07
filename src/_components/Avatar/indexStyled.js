import styled from '@emotion/styled'
import {Wrapper as CSS} from "../../_css/GlobalElements"

export const Container = styled.div`
  min-width: 350px;
  min-height: 700px;
  padding-top: 3.5%;
`
export const Wrapper =styled(CSS)`
  align-items: center;
`
export const Img =styled.div`
  align-items: center;
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  cursor: pointer;
`

export const AddImgIcon =styled.img`
  align-items: center;
  position: absolute;
  border-radius: 100px;
  background: rgba(42, 46, 53, 1);
  height: 32px;
  width: 32px;
  right: 0;
  top: 0;
`

export const Picture = styled.img`
  width: 100px;
  height: 100px;
  box-sizing: border-box;
  border: 2px solid rgba(240, 248, 255, 0.64);
  border-radius: 100px;
  object-fit: cover;
  &:hover{
    border-color:${({upload})=>upload?"hsla(355, 77%, 52%, 1)":"hsla(208, 100%, 97%, 1)"}
  }
`

export const  ImgButton = styled.button`
  display: inline;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  color: hsla(208, 100%, 97%, 0.64);
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  &:hover{
    color: hsla(208, 100%, 97%, 1);
  }
`;

export const DragArea = styled.div`
  opacity:${({drag})=>drag && "30%"}
`