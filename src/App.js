import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Cards from './components/cards/Cards'
import Contact from './components/contact/Contact'
import {Articles} from './components/articles/Articles'
import {Whatsapp} from './components/Whatsapp'

import  usePageTracking  from './usePageTracking'
import { Route } from 'react-router-dom'

class App extends Component {
  
  
 

  // fake authentication Promise
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 2000))
  }

  componentDidMount(){
    usePageTracking();
    this.authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if(ele){
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 3000)
      }
    })
  }


     render() {
   
      return (
        <div className="App">   

              <Route exact path='/' render={ () => (
                <>
                  <Whatsapp />
                  <Header /> 
                  <Hero />
                  <Cards />
                </>
              )} /> 

              <Route path='/contact' component={ Contact } />  
              <Route path='/articles' component={ Articles } />
  
        </div>
      );
  }
}

export default App;
