import React, { Component } from 'react';
import "./App.css"
const menu = [{name:"Home"},{name:"Services",value:["For entrepreur ","For Students", "For  hobbyists"]},{name : "Contact"}]
class App extends Component {
  state = { 
    display : false
   }
 Show =()=> {
   this.setState({
     display:!this.state.display
   })
 }
  render() {
    return ( 
      <div>
      
      {menu.map((el,i)=><div key= {i}>
            {el.value ? <div>
              
             <p onClick={el.name==="Services" ?this.Show : console.log("aa")}>  {el.name}</p>
                {el.value.map((el)=><ul className={ this.state.display ? "display" : "hide"}>
                <li>{el}</li>
                </ul>)}
            </div>
            :
            <div>
              {el.name}
              </div>}
    </div>)}

          
      </div>);
  }
}

 
export default App;

