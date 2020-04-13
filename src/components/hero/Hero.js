import React, { Component } from 'react';
import '../hero/Hero.css';


class Hero extends Component{
    render(){
        return(
            <section className="ui-hero">
                <div className="ui-hero__container">
                        <div className="ui-hero__box">
                            <h2 className="ui-hero__title"> Hello </h2>
                            <p className="ui-hero__subtitle">
                                Im a <span>Felipe Genuino</span> <br/>
                                Creative UI and <span>Frontend</span>  designer
                            </p>

                        {/* <ul>
                            <li><a href="!#" alt="Last works" title="Last works"> Last works </a> </li>
                            <li><a href="!#" alt="Publication" title="Publication"> Publications </a> </li>
                            </ul> */}
                        </div> 
                </div>
            </section>
        );
    }
}
export default Hero;