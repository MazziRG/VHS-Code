import {useState} from 'react';

import {DragArea} from "../indexStyled"

const DropArea = ({children , handleUpload}) => {
  const [drag, setDrag] = useState(false);


  const onDragOver =(e)=>{
    e.preventDefault();
    e.stopPropagation();
  }

  const onDrag =(e)=>{
    e.preventDefault();
    e.stopPropagation();
    setDrag(!drag)
  }
    
  const onImageDrop=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    setDrag(false)
    handleUpload(e.dataTransfer)
  }


  return( 
    <DragArea
      drag={drag}
      onDragEnter={e=>onDrag(e)}
      onDragLeave={e=>onDrag(e)}
      onDragOver={e=>onDragOver(e)}
      onDrop={e=>onImageDrop(e)}>
        {children}
    </DragArea>);
};

export default DropArea;
