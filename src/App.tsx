import { useState } from 'react'
import {foodData} from './interface/foodData'
import { CreateModal } from './components/createModal/createModal';
import './App.css'
import { Food } from './components/food/food';
import { useFoodData } from './hooks/useFoodData';
function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev) }

  return (
    <div className='container'>
        <h1>cardapio</h1>
        <div className="card-grid">
          {data?.map(foodData => <Food price={foodData.price} title={foodData.title} image = {foodData.image}/>)}
        </div>
        
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
