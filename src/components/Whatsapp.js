import React from "react";
import styled from 'styled-components'


import icon from './IconWhats.svg'


const Whatsicon = styled.div `
position: fixed;
bottom: 20px;
right: 20px;
width: 39px;
height: 39px;
 overflow: hidden;
 z-index: 1000
 ` 


 export function Whatsapp() {
 
        return(
            <Whatsicon>
                <a 
                aria-label="Abre whatsapp, link do meu whatsapp (48) 99911-3048, me mande um oi"
                target="_blank" 
                rel="noopener noreferrer" 
                href="https://api.whatsapp.com/send?phone=5548999113048" 
                className="whatsapp"> 
                    <img src={icon} aria-hidden="true" alt="Whatsapp" />
                </a>
            </Whatsicon>
        )
   
}




