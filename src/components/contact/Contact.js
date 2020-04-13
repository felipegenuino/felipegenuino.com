import React, { Component } from 'react';
import '../contact/Contact.css';
import serializeForm from 'form-serialize';
   

class Contact extends Component{

    constructor(props){ 
        super(props);
        this.state = { };
        
        this.asset = {}
    }



    componentDidMount() { }
    

      
      
    handleSubmit = (e) => {
        e.preventDefault(e);

        const values = serializeForm(e.target, {hash:true})
        console.log('values', values)
    } 

    render(){  

        return(
            <div className="cards">
                <div className="ui-cards__container">
                    <div className="ui-header-page">
                        <h3 className="ui-header-page__title">Contact</h3>
                        <p className="ui-header-page__subtitle">Algum texto relacionado a contato</p>

                        <form onSubmit={this.handleSubmit} className="contactForm">
                            <input type="text" className="" placeholder="Nome" name="name"/>
                            <input type="email" className="" placeholder="email" name="email"/>
                            <textarea name="content" rows="5"></textarea>
                            <button>Enviar</button>
                        </form>
                    </div>
                </div>                    
            </div>
        );
    }
}
export default Contact;