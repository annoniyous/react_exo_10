import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state = {

    title : "Titre par default",

    para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  }
  
  changeTitle = ()=> {
      this.setState({title:"Mon title"} );
   }

   
   render() {
     
    return (
      <div>
        <h1 onClick={this.changeTitle}>{this.state.title}</h1>
        <p>{this.state.para}</p>
        <button onClick={() =>{
        this.setState({para: "Mon nouveau para"})
      }}>Changer le para</button>
      </div>
      
    )
  }
}

export default App

