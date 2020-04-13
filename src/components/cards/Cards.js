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
            <div className="cards">
                <div className="ui-cards__container">
                    <div className="ui-header-page">
                        <h3 className="ui-header-page__title">My last works</h3>
                        <p className="ui-header-page__subtitle">Below my last works. 
                        WebApps, hotsites, folders, flyers and business card, 
                        over 8 years of career as a <span>designer</span> and <span>frontend</span>, 
                        working for big companies like AltoQi, Softplan, RTA, 
                        Myfid and many others.</p>
                    </div>



        <article className="works">
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

        </article>


          
 

                </div>                    
            </div>
        );
    }
}
export default Cards;