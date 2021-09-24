// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  const products = [
    {name: 'Adobe Photoshop', price: '$90.99'},
    {name: 'Adobe Illustrator', price: '$92.99'},
    {name: 'Adobe XD ', price: '$95.99'},
    {name: 'Adobe Premium ', price: '$95.99'},
  ]


  return (
    <div className="App">
      <header className="App-header">
        <p>This is my React.js Start up</p>
        <Counter></Counter>
    <div className = "productContainer" >
        <Product product ={products[0]} ></Product>
        <Product product ={products[1]} ></Product>
        <Product product ={products[2]} ></Product>
        <Product product ={products[3]} ></Product>
        </div>
        {
          products.map(product=><Product product={product} ></Product>)
        }
        <Person name= "MD Arifuzzaman" job = "Web developer" ></Person>
        <Person name= "Sharmin Sultana" job = "Student"  ></Person>
        <Person name= "Rasel Mahmud" job = "Engineer Student" ></Person>
        <Person name= "Omit Hasan" job = "Student" ></Person>
      </header>
    </div>
  );
}


function Counter(){
  const[count, setCount] = useState(10);
  // const handleIncrease = ()=> setCount(count + 1);
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button className= 'minus' onClick={()=> setCount(count - 1)}>-</button>
      <button className='plus' onClick={()=> setCount(count + 1)} >+</button>
    </div>
  )
}

function Person(props){
  
  const personStyle ={
    border:'5px solid silver',
    borderRadius:'5px',
    margin: '10px',
    padding:'15px'
  }
 

  return(
    <div style = {personStyle}>
      <h2>Name: {props.name}</h2>
      <h3>{props.job}</h3>
      
    </div>
  )
}



// product section

function Product(props){
  const productStyle ={
    width:'250px',
    height:'250px',
    backgroundColor:'orange',
    margin: '10px',
    padding:'30px',
    color: '#fff',
    border:'3px solid silver',
    borderRadius:'5px'
    
  }
const {name, price} = props.product;
  return(
    <div style={productStyle} >
    <h2>{name}</h2>
    <h4>{price}</h4>
    <button>Buy Now</button>
    </div>
  )
}

export default App;
