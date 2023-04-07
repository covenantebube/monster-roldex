import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
  this.state = {
    name: {firstName:'Covenant', lastName: 'Ebube'},
    company: 'Glodev' ,
  };

  }  


  render (){ 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hi {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}</p>
          <button onClick={()=>{
            this.setState({name : {firstName:'Innocent', lastName: 'Covenant'}});
            console.log(this.state)
          }}>change Name</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
