import React, { Component } from 'react';//imrc
import "./App.css"
class App extends Component {//ccc

  constructor(props) {
    super(props);
    this.state = {

      classDrop: false

    }
  }
  render() {
    return (
      <ul className="dropdown" >
        <li>Home</li>
        <li onClick={() => this.setState({ classDrop: !this.state.classDrop })}>Services 
        <ul className={this.state.classDrop ? "dropdown-content" : "dropdown-content-none"} >
          <li>For entrepreneurs</li>
          <li>For etudients</li>
          <li>For hobbiests</li>
           </ul>
        </li>
          
        
        
        
           <li>Contact</li>

      </ul>


    );
  }
}

export default App;