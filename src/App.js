import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
  super();
    
  this.state = {
    monsters:[],
    searchField: ''
    
  }; 
  console.log("constuctor")
    
    }
    
    componentDidMount(){
      
      console.log("componentDidMount")

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

// *we a

  render (){ 

 console.log( "render")
// *this take
    const filteredMonsters =this.state.monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });
   
    return <div className="App"> 
    <input className='search-box' type='search' placeholder='search monster' onChange={(event)=>{
      console.log(event.target.value);
      //*serch field  an '' at this.state and now has been given a value which is every typed event in the input field
      //*event.target.value == is every typed event in the input field
      const searchField = event.target.value.toLocaleLowerCase();

     
      this.setState(()=>{
        return {searchField}
      })
      
      }} ></input>
      {/* this is just to display each filtered monter's name  */ }
   { filteredMonsters.map((monster)=>{
      return (
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
