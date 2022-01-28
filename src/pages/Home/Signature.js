import React from 'react';
import { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import './Signature.css';
import { Button } from 'react-bootstrap';

const Signature = () => {
    const [imageURL, setImageURL] = useState(null);
    const sigCanvas = useRef({});
    const clear = () => sigCanvas.current.clear();
    const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    return (
        <div>
           <div className="App">
      <Popup
        modal
        trigger={<Button style={{marginTop:'30px'}} variant='warning'>Please!Click here to Open</Button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas"
              }}
                />
            <Button variant='warning'style={{marginLeft:'10px'}} onClick={clear}>Clear</Button>
            <Button variant='success' style={{marginLeft:'10px'}} onClick={save}>Save</Button>
            <Button style={{marginLeft:'70%',marginTop:'-65px'}} onClick={close}>Close</Button>
          </>
        )}
        </Popup>
      <br />
      <br />
      {imageURL ? (
        <img
          src={imageURL}
          alt="my signature"
          style={{
            display: "block",
            marginTop: "200px",
            // border: "1px solid black",
            width: "300px",
            marginLeft:'150px'
          }}
            />
                ) : null}
                <p>Your Signature will go here!</p>
                <hr style={{marginTop:'50px'}}/>
            </div>           
        </div>
    );
};
export default Signature;

// import React, { useRef } from 'react';
// import SignaturePad from 'react-signature-canvas';


// const Signature = () => {

//     let sigPad = useRef({});
//     let data = '';

//     function clear() {
//         sigPad.current.clear()
//     }
//     function save() {
//         data = sigPad.current.toDataURL()
//     }
    
//     function show() {
//         sigPad.current.toDataURL(data)
//     }
    
//     return (
//         <div style={{border:'2px solid red'}}>
//             <button onClick={clear}>Clear</button>
//             <button onClick={save}>Save</button>
//             <button onClick={show}>Show</button>           
//             <SignaturePad ref={sigPad} penColor='black'></SignaturePad>
//         </div>
        
//     );
// };
// export default Signature;