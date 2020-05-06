import React, { Component } from 'react';
import '../header/Header.css';
import logo from '../../brand.svg';
import { Link } from 'react-router-dom';

 class Header extends Component{
    render(){
        return(
            <header>
                <Link to="/">
                    <img src={logo} width="30" 
                     alt="Símbolo com um F estilizado no tamanho de uma moeda pequena,  em branco na frente de um fundo escuro, fica localizado visualmente em cima e a esquerda do banner, se clicar vai para a home, como só temos uma página ficamos por aqui."
                     />
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