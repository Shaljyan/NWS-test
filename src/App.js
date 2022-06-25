import React, { useEffect, useState } from 'react';
import './App.css';
import styled from 'styled-components';

const App = () => {
  const [items, setItems] = useState([])

   const fetchData = () => {fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
      .then(response => {
        return response.json()
      })
      .then(data => {
          setItems(data)
    });
  };
useEffect(() =>{
  fetchData()
},[])



  return (
    <div className = "App">
      <H1> Fetch data </H1>  {
        items.map((item) => ( 
        <ol key = {item.id} >
            Id: {item.id}
            {<br/>} 
            <Img onClick={fetchData} src={item.url} />
            </ol>
        ))
    }
    
</div>
    )
      
  }

  const H1 = styled.p`
  font-size: 35px;
  color: #2271b1;
  `
  
  const Img = styled.img`
    width: 250px;
    height: 250px;
    border: 1px solid #000000;
    border-radius: 20px;
    cursor: pointer;
  `

export default App;
