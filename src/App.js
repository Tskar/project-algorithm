import './App.css';
import React, { useEffect, useState } from 'react';

import AnimationWindow from './Components/AnimationTab/AnimationWindow';
import Sidebar from './Components/Sidebar/Sidebar';
import Titlebar from './Components/Titlebar/Titlebar';

import Algorithms from './Algorithms/Algorithms';

function App() {
  
  const [array, setArray] = useState([]);
  const [playing, setPlaying] = useState(false);
  const [compare, setCompare] = useState([]);
  const [color, setColor] = useState([]);
  const [speed, setSpeed] = useState(2);
  const [quantity, setQuantity] = useState(5);
  const [algorithmType, setAlgorithmType] = useState(null);

  
  useEffect (() => {

    createArray();
  }, [quantity, algorithmType]);

  const createArray=() => {
      const array = [];
      setPlaying(false)
      if(algorithmType !== null){
        for (let i = 0; i < parseInt(quantity); i++) {
            array.push(randomNumber(5, 500));
        }
        setArray(array);
      }

  }

  function randomNumber(minimumNumber, maximumNumber) {
      return Math.floor(Math.random() * parseInt(maximumNumber-minimumNumber) + minimumNumber);
  }

  const handleAlgorithm = (e) => {
    setAlgorithmType(e.target.value)
  }

  const handleSpeed = (e) => {
		setSpeed(e.target.value)
  }

  const handleQuantity = (e) => {
    setQuantity(e.target.value)
  }

  const AlgorithmSort = () => {
		
    //first array index = item[0]
    //second array index = item[1]
    //color of current div = item[2]
    //current array status = item[3]
		const animationHandler = (animations) => {
      {animations.map((item, id) => {
        setTimeout(function() {
            setCompare([item[0], item[1]])
              setColor(item[2])

              if(item[3]){
                if(item[0] !== null || item[1] != null)
                  setArray(item[3])
              }
          if (++id < animations.length){
            setPlaying(true)
          }
          else {
            setPlaying(false)
          }
          console.log(speed)
          }, id* 400/ (parseInt(speed)))
      })}
    }

    setPlaying(true)
    animationHandler(Algorithms(array, algorithmType))
  }



  return (
    <div className="App">
      <Titlebar handleAlgorithm = {handleAlgorithm}/>
      <div className='App-body'>
        <Sidebar generate={() => createArray()}
                  handleAlgorithm = {handleAlgorithm}
                  handleSpeed = {handleSpeed}
                  handleQuantity = {handleQuantity}
                  algorithmType = {algorithmType}
                  sort = {AlgorithmSort}
                  playing = {playing}
                  quantity= {quantity}
                  speed = {speed}
                  />
        <AnimationWindow array = {array}
                  compare = {compare}
                  color = {playing && color}
                  quantity = {quantity}
                  />
      </div>
    </div>
  );
}

export default App;