import './Overlay.css';
import './Content.css';
import './Hide.css';
import Auxil from './../Auxil/Auxil.js'
import { useState } from 'react';

export default function Overlay(props){
    let triggerhidden=null;
    let selectedFile=null;

    const [currSelectedFile, changeSelectedFile]=useState(null);

    let processCurrSelected=()=>{
        console.log(currSelectedFile)
        if(currSelectedFile){
            return(
                <Auxil>
                    <div>Name: {currSelectedFile.name}</div>
                    <div>Name: {currSelectedFile.type}</div>
                    {/* <div>Name: {currSelectedFile.lastModifiedDate.toDateString()}</div> */}
                </Auxil>

            )
        }else{
            return(
                <div>No file selected</div>
            )
        }
    }

    return(
        <div className={`Background ${props.invisibility}`}
         onClick={e=>{
            if(triggerhidden===e.target)
                props.setInvisibility(e);
         }}
         ref={node=>{triggerhidden=node}} >
            <div className={`Content`}>
                Content
                <input type='file' onChange={e=>{
                    // console.log(e.target.files[0]);
                    changeSelectedFile(e.target.files[0]);
                }}/>
                {processCurrSelected()}
            </div>
        </div>
    )
};