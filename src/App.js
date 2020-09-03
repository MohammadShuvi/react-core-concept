import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
      const programmers = ['Mohammad Shuvo', 'Mark Jakerberg', 'Bill Gates'];
      const job = ['CEO of Google', 'CEO of Facebook', 'CEO of Microsoft'];
      const products= ['google', 'facebook', 'Microsoft'];
      const worth = ['2.5B', '1B', '2B']
  return (
    <div className="App">
      <header className="App-header">
       
        
        <p>My first React App</p>
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            programmers.map(programmers => <li>{programmers}</li>)
          }

        </ul>
        <ul>
          {
            products.map(products => <li>{products}</li>)
          }
        </ul>
        <Product products={products[0]} worth={worth[0]}></Product>
        <Product products={products[1]} worth={worth[1]}></Product>
        <Product products={products[2]} worth={worth[2]}></Product>
        <Person name={programmers[0]} about={job[0]}></Person>
        <Person name={programmers[1]} about={job[1]}></Person>
        <Person name={programmers[2]} about={job[2]}></Person>
        
      </header>
    </div>
  );
}
function Product(prod){
  console.log(prod);
  const productStyle ={
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'250px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle}>
      <h4>{prod.products}</h4>
      <h5>${prod.worth}</h5>
      <button>Buy NOw</button>
    </div>
  )
}
function Counter(){
  const [count, setCount]= useState(10);
  const countIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
    // setCount(count+1); == it also work
  }
  const countDicrase = () =>{
    setCount(count - 1);
  }
 
  return(
    <div>
      <h2>Counter: {count}</h2>
      <button onMouseMove={countIncrease}>+</button>
      <button onClick={countDicrase}>-</button>
    </div>
  )
}
function Users(){
  const [Users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
 
  return (
    <div>
      <h2>User Data: {Users.length}</h2>
      <h1>Name</h1>
      <ul>
        {
          Users.map(Users => <li>{Users.name}</li> )
        }
      </ul>
      <h1>email</h1>
      <ul>
        {
          Users.map(Users => <li>{Users.email}</li>)
        }
      </ul>
    </div>
  )
}
function Person(props){
  console.log(props);
  return <div style = {{border:'2px solid blue', margin:'10px', backgroundColor:'salmon', color:'seagreen', height:'300px', width:'300px'}}>
  <h1>{props.name}</h1>
  <h3>{props.about}</h3>
  </div>
}
export default App;
