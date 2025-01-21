import './ToggleSwitch.css';
import {React, useState} from 'react';
export const ToggleSwitch = ()=>{
    const [toggleLabel, toggleSwitch] = useState(false);
    const handleToggle = (e) => {
        toggleSwitch(!toggleLabel);   
    }
   
    const toggleBg = toggleLabel ? "black" : "#bab1ea" ;
    
    const toggleClass = toggleLabel ? "on" : "off";

    return(
        <>
        <div className="container">
        <div className="toggle-switch" onClick={(e) => handleToggle(e)} 
            style={{backgroundColor: `${toggleBg}`}}
        >
              <div className={`switch ${toggleClass}`}>
                <span>{toggleClass}</span>
              </div>
            </div>
        </div>
        </>
    );
}
