import React, { Component } from 'react';
import '../hero/Hero.css';


class Hero extends Component{
    render(){
        return(
            <section className="ui-hero"
            role="banner" 
            aria-label="Banner ocupando a tela toda, imagem de Felipe Genuino ao fundo direito em preto e branco, 
            exibindo somente do ombro pra cima olhando para voce meio que de lado, 
            tentando demonstrar um pouco de seriedade e dignidade. Ao lado esquerdo 
            um título Hello, eu sou Felipe Genuino, designer de interfaces e Frontend designer."
            >
                <h1 className="sr-only"> Hello, eu sou Felipe Genuino, designer de interfaces e frontend designer</h1>
                <div className="ui-hero__container" aria-hidden="true" >
                    <div className="ui-hero__box"> 
                        <h2 className="ui-hero__title"> Hello </h2>
                        <p className="ui-hero__subtitle">
                            Im a <span>Felipe Genuino</span> <br/>
                            Creative UI and <span>Frontend</span>  designer
                        </p>  
                    </div> 
                </div>
            </section>
        );
    }
}
export default Hero;