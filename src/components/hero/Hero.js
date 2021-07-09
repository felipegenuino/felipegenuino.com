import React, { Component } from 'react';
import '../hero/Hero.css';


class Hero extends Component{
    render(){
        return(
            <section className="ui-hero"
            role="banner"  
            >
                 <div className="ui-hero__container">
                    <div className="ui-hero__box"> 
                        <h2 className="ui-hero__title" aria-describedby="extra-info" > 
                            <span> Olá, sou</span> 
                            <span className="ui-hero__title-name"> Felipe Genuino</span> 
                            <span className="sr-only">designer de interfaces, frontend designer e apaixonado por acessibilidade.</span>
                        </h2>
                        {/* <p className="sr-only">Descrição do banner principal: Banner ocupando a tela toda, imagem de Felipe Genuino ao fundo direito em preto e branco, 
            exibindo somente do ombro pra cima olhando para voce meio que de lado, 
            tentando demonstrar um pouco de seriedade e dignidade. Ao lado esquerdo 
            um título Hello, eu sou Felipe Genuino, designer de interfaces e Frontend designer.</p> */}
                        <p className="ui-hero__subtitle" aria-hidden="true">
                            designer de interfaces
                            <span className="ui-hero__subtitle-break"> <span>frontend</span>  designer  </span>
                            apaixonado por acessibilidade.
                        </p>  
                    </div> 
                </div>
            </section>
        );
    }
}
export default Hero;