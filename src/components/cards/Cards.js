import React, { Component } from 'react';
import '../cards/Cards.css'
import Work from '../work/Work'
import { createClient } from "contentful";




class Cards extends Component{

    constructor(props){ 
        super(props);
        this.state = { 
            portfolio: [] 
        };
        this.client = createClient({
           accessToken:  "7c8eb442b51f30684bef4ff350ad1a96a4e01f9d4dfb0c992c41d990a23fa302",
          space: "pubzoq33k6dk"
        })
        this.asset = {}
    }



    componentDidMount() {
        this.client
          .getEntries({ content_type: "works" })
          .then(response => this.setState({ portfolio: response.items }));
          
        //   const asset = this.client.getAsset('works')
        //   .then((asset) => console.log(`${asset.fields.file.url}?fm=jpg+`))

       }
    

      
      

    render(){

        console.log('cards', this.state);

        return(
            <main id="main" className="cards" aria-label="últimos trabalhos">
                <div className="ui-cards__container">
                    <div className="ui-header-page">
                        <h3  className="ui-header-page__title">Meus últimos trabalhos</h3>
                            <p className="ui-header-page__subtitle">A seguir meus últimos trabalhos
                            WebApps, hotsites, folders, flyers e Cartões de visitas, 
                            mais de 10 anos de carreira como <span>designer</span> and <span>frontend</span>, 
                            trabalhei em grandes empresas e projetos como AltoQi, Softplan, RTA, 
                            Myfid e muitos outros.</p>
                        </div>



        <ul className="works" aria-label="Trabalhos">
            { this.state.portfolio.map(work => 
              <Work 
                key={work.fields.id} 
                title={work.fields.title}  
                image={work.fields.image} 
                link={work.fields.url}
                content={work.fields.descricao}
                />
            )         
        }

        </ul>


          
 

                </div>                    
            </main>
        );
    }
}
export default Cards;