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
        id:'12wkxk2'
      },
      
      {
        name:'Blessed',
        id:'12wkasd2'
      },
      
     {
      name:'praise',
      id:'12wfsg'
      },
     {
      name:'peculia',
      id:'12wkwer2'
      },
    ]
    
      
      }; 

    }

  render (){ 
    return <div className="App"> 
   {
    //this maps through the monster of the this.state obj and returns each monster's name
     this.state.monsters.map((monster)=>{
      return (
        //" Warning: Each child in a list should have a unique "key" prop."- useful for react
        <div key = {monster.id}>
          <h1>{monster.name}</h1>
        </div>
        
        
      )
    })

   }
    
      
  </div>
  }
}

export default App;
