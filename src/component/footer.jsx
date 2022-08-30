import React from 'react';


import '../css/body.css'
import instagram from "../icons/instagram_icon.png"
import whatsapp from "../icons/whatsapp_icon.png"


function footer(){
    return (
    <div id='footer'>
    <div style={{float:"left", fontSize:"0.7rem"}} >
    <span> <img style={{width:"1rem", height:"1rem"}} src={instagram} alt="instagram icon"/> damisco_creations</span>
        </div>
        <div style={{float:"center", fontSize:"0.8rem"}}>
    Copyright© 2022
    </div>
    <div style={{float:"right", fontSize:"0.7rem"}}>
    <img style={{width:"1rem", height:"1rem"}} src={whatsapp} alt="instagram icon"/> +2348134274863
    </div>
    </div>
    )
}


export default footer;