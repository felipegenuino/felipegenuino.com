import React, { Component } from 'react';
import '../work/Work.css'




class Work extends Component { 
    state = {
        expanded: false
      };
 
      handleChange = () => {
        // this.setState({ expanded: !this.state.expanded });
      };

    render(){
        // console.log('card', this.props)
         console.log('state', this.state)

        return(
          <li className="work shadow-lg"> 
            <div >
              <a  
              href={this.props.link} 
              target="_blank"                 
              aria-label={`Abre em outra página: ${this.props.image.fields.description}`} > 
                <img className="work__image" onClick={this.handleChange} src={this.props.image.fields.file.url} alt={this.props.title} aria-hidden="true" />

                {/* <button onClick={this.handleChange}> close </button> */}
                <div className="work__body"> 
                    <h3 className="work__title"> 
                        <span className="work__link"  __href={this.props.link}> {this.props.title} </span> 
                    </h3>
                    {/* <a  href={this.props.link} target="_blank" >  asdasd  </a>   */}
                </div> 
                </a>
            </div>
            </li>
        );
    }
}

export default Work;