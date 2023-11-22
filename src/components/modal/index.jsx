import React from 'react'
// import { useState } from "react";
import "./style.css"




const Modal = ({setShowModal}) => {
 
  return (
    
<div className='modallist'>
{/* <button>Open Modal</button> */}
<div className='modal'>
    <div className='modal-content'>
        <span className='close' onClick={()=>setShowModal(false)}>&times;</span>
        <p>KAJSKAJIj</p>
    </div>
</div>
</div>

  )
}

export default Modal