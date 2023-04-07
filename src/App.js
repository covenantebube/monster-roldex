import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super();
    
  this.state = {
    monsters:[],
    
  }; 

    }
     
    componentDidMount(){
      //* the fetch returns a promise in which we then convert its response to json which a returns a promise and we then take the users and setState and pass a call back
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> this.setState(()=>{
        return {monsters: users}
      }, ()=> {
        console.log(this.state);
      }
      
      ))
      ;
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
