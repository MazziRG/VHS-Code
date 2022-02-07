import React, { useState, useRef } from 'react';
// Css
import{Label} from "../../_css/GlobalElements"
import {Container, Wrapper, ImgButton } from "./indexStyled";
// import comp
import ProfileImg from "./ProfileImg"





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

           {/* Profile Image comp */}
          <ProfileImg 
            upload={upload}
            toggleButton={toggleButton}
            handleUpload={handleUpload}
          />

          {/* Image Button To Upload/Remove */}
          <ImgButton onClick={()=>toggleButton()}>
             {upload? "Remove" : "Upload" }
          </ImgButton>

          {/* input for gathering file */}
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
