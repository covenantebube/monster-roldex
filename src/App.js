import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super();
    
  this.state = {
    monsters:[
      {
        name:'Covenant',
      },
      
      {
        name:'Blessed',
      },
      
     {
      name:'praise',
      },
    ]
    
      
      }; 

    }

  render (){ 
    return <div className="App"> 
   {
    //this maps through the monster of the this.state obj and returns each monster's name
     this.state.monsters.map((monster)=>{
      return <h1>{monster.name}</h1>
    })

   }
    
      
  </div>
  }
}

export default App;
