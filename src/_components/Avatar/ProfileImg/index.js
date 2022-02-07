import React from 'react';
import DropArea from '../DropArea';
import {Img, Picture, AddImgIcon} from "../indexStyled";
// Assets Import 
import profile from "../../../_assets/profile.svg"
import addImg from "../../../_assets/add-img.svg"

const ProfileImg = ({upload , toggleButton, handleUpload}) => {
  return (         
    <Img
        onClick={()=>toggleButton()}
        upload={upload}
        >
        <DropArea 
        handleUpload={e=>handleUpload(e)}
        >
        <Picture 
            src={upload? upload : profile}
        />
        {!upload && <AddImgIcon src ={addImg}/>}
        </DropArea>
    </Img>);
};

export default ProfileImg;
