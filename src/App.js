import React, { useState, useEffect } from 'react';
import Restaurent from './Restaurent';
import RestaurentDetails from './RestaurentDetails';
import data from './data.json';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  const [groupByCategory, setGroupByCategory] = useState([]);

  useEffect(() => {
    let categoryArray = [];
    data.Category.forEach((res) => {
      const category = data.Item.filter(
        (user) => user.CategoryID === res.CategoryID
      );
      var obj = {};
      obj[res.CategoryID] = category;
      categoryArray.push(obj);
    });
    setGroupByCategory(categoryArray);
    console.log(categoryArray);
  }, []);
  return (
    <div className="App">
      <h1>Restaurent App!</h1>
      <Restaurent />
      <RestaurentDetails />
    </div>
  );
}

export default App;
