import { useState } from 'react'
import {foodData} from './interface/foodData'
import './App.css'
import { Food } from './components/food/food';
import { useFoodData } from './hooks/useFoodData';
function App() {
  const {data} = useFoodData();

  return (
    <div className='container'>
        <h1>cardapio</h1>
        <div className="card-grid">
          {data?.map(foodData => <Food price={foodData.price} title={foodData.title} image = {foodData.image}/>)}
        </div>


    </div>
  )
}

export default App
