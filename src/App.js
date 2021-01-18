import './App.css';

import React, { Component } from 'react'

export class App extends Component {

  state = {

    title : "Titre par default",

    para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    titre2 : "Titre2",
    npara : "Lorem ipsum, dolor sit amet consectetur adipisicing elit"
  }
  
  changeTitle = ()=> {
      this.setState({title:"Mon title"} );
   }
   valInput = () =>{
     let input = document.querySelector('input');
     let val = input.value;
     this.setState({
       titre2 : val
     })
   }
   changeText = () =>{
     let aria = document.querySelector("textarea");
     let valarea = aria.value;
     this.setState({
       npara : valarea
     })

   }
   
   render() {
     
    return (
      <div>
        <h1 onClick={this.changeTitle}>{this.state.title}</h1>
        <p>{this.state.para}</p>
        <button onClick={() =>{
        this.setState({para: "Mon nouveau para"})
      }}>Changer le para</button>
      <h2>{this.state.titre2}</h2>
      <input type="text" name="" id=""/>
      <button onClick={this.valInput}>Changer le titre 2 en input</button>
      <p>{this.state.npara}</p>
      <textarea onChange={this.changeText} name="" id="" cols="30" rows="10"></textarea>
      </div>
      
    )
  }
}

export default App

