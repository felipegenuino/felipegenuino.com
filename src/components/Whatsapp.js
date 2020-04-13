import React,  { Component } from "react";
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



export default class Whatsapp extends Component{
    render(){
        return(
            <Whatsicon>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5548999113048" className="whatsapp"> 
                    <img src={icon} />
                </a>
            </Whatsicon>
        )
    }
}




