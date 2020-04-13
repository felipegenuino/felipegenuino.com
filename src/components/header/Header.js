import React, { Component } from 'react';
import '../header/Header.css';
import logo from '../../brand.svg';
import { Link } from 'react-router-dom';

 class Header extends Component{
    render(){
        return(
            <header>
                <Link to="/">
                    <img src={logo} width="30" title="test" alt="Alt"/>
                </Link>
                 {/* <ul>
                     <li><a href="">Home </a></li>
                     <li><a href="">Works </a></li>
                     <li><a href="">Contact </a></li>
                 </ul> */} 
            </header> 
        );
    }
}
export default Header;