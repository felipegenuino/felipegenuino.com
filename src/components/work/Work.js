import React, { Component } from 'react';
import '../work/Work.css'
import classNames from "classnames";



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
            <div className={classNames("work shadow-lg",{ active: this.state.expanded })}  >
              <a  href={this.props.link} target="_blank" > 
                <img className="work__image" onClick={this.handleChange} src={this.props.image.fields.file.url} alt={this.props.title} />

                {/* <button onClick={this.handleChange}> close </button> */}
                <div className="work__body"> 
                    <h3 className="work__title"> 
                        <span className="work__link"  __href={this.props.link}> {this.props.title} </span> 
                    </h3>
                    {/* <a  href={this.props.link} target="_blank" >  asdasd  </a>   */}
                </div> 
                </a>
            </div>
        );
    }
}

export default Work;