import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState('')//[value, setValue]
  const [monsters, setMonsters] = useState([]);
 // const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  console.log('render');
  //adding fetch calls like this will trigger infinite rerender calss
  //we can resolve that using the useEffect hook
  //use effect hook takes two arguments {}=>a callback fxn, []=an array of dependecies (useEffect(()=>{},[]);)
  //a callback fxn= the code we want to happen inside our fxn
  //[]== sates of dependences, state or props values, what it is saying is when any of the dependencies inside of this array changes is when i will run this call back function
  //the fetch call is a side effect
  //passing an empty array means nothing is going to change in the call back fxn as it will only run once when it is mount

  useEffect(()=>{
    console.log('effect fired')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((users)=> setMonsters(users));
  },[]);

      


  const onSearchChange = (event)=>{
      const searchFieldString = event.target.value.toLocaleLowerCase();

      setSearchField(searchFieldString);
  };
//this is called every time we type and it cost alot so..
    const filteredMonsters = monsters.filter((monster)=>{
      return  monster.name.toLocaleLowerCase().includes( searchField);
    });


  return(
    <div className="App"> 
  <h1 className='app-title'>Monsters Rolodex</h1>
      <SearchBox
       className = 'monster-search-box'
       onChangeHandler = {onSearchChange}
       placeholder = 'search monsters'
          />
      <CardList monsters ={filteredMonsters} />
  </div>

  )
}




// class App extends Component {
//   constructor(){
//   super();
    
//   this.state = {
//     monsters:[],
//     searchField: ''
    
//   }; 
    
//     }
    
//     componentDidMount(){

//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response)=> response.json())
//       .then((users)=> this.setState(()=>{
//         return {monsters: users}
//       }, 
      
//       ))
//       ;
//     }





//   render (){ 
//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;



   
//     return (
    
//     );
//   }
// }


export default App;
