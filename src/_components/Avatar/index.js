import React, { useState, useRef } from 'react';
import DropArea from './DropArea';
// Css
import{Label} from "../../_css/GlobalElements"
import {Container, Wrapper, Img, ImgButton, Picture, AddImgIcon } from "./indexCSS";
// Assets Import 
import profile from "../../_assets/profile.svg"
import addImg from "../../_assets/add-img.svg"




const Avatar = () => {
  const [upload, setUpload] = useState(null)
  let inputRef = useRef()

  // handels the upload process
  const handleUpload =(e)=>{
    const file = e.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend =()=>setUpload(reader.result)
  }

  // toggles remove button to upload
  const toggleButton = ()=>{
    upload? setUpload(null) : inputRef.current.click();
  }

  return(     
    <Container data-testid="avatar">
        <Wrapper>
          <Label> Images</Label>

           {/* Image Wrapper */}
          <Img
            onClick={()=>toggleButton()}
            upload={upload}>
            <DropArea handleUpload={e=>handleUpload(e)}>
              <Picture src={upload? upload : profile}/>
              {!upload && <AddImgIcon src ={addImg}/>}
            </DropArea>
          </Img>

          {/* Image Button To Upload/Remove */}
          <ImgButton onClick={()=>toggleButton()}>
             {upload? "Remove" : "Upload" }
          </ImgButton>
          <input 
            type='file' 
            ref={inputRef}
            accept="image/*"  
            style={{"display":"none"}}
            onChange={e=>handleUpload(e.target)}/>
        </Wrapper>
    </Container>
  );
};

export default Avatar;
