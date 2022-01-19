import './titlebar.css';
import React, {useState} from 'react';


function Titlebar({handleAlgorithm}) {

  //Slider feature to use after LL Algorithms feature updates.
  const [open, setOpen] = useState(true); 

  return (
    <div className='titlebar'>
      <ul className='title-list'>
        <li className='title'>
          <p>Try Algorithm</p>
        </li>
        <li className='dd-options'>
          <a href='#' className='option-button' onClick={() => setOpen(!open)}> Algorithm </a>
          <i className="fas fa-chevron-right"></i>
        </li>
        <li className='dd-list'>
          <nav className={open? 'dd-items active' : 'dd-items'}>
            <button className='list-item' onClick={handleAlgorithm} value='bubbleSort'>Bubble Sort</button>
            <button className='list-item' onClick={handleAlgorithm} value='insertionSort'>Insertion Sort</button>
            <button className='list-item' onClick={handleAlgorithm} value='MergeSort'>Merge Sort</button>
            <button className='list-item' onClick={handleAlgorithm} value='selectionSort'>Selection Sort</button>
            <button className='list-item' onClick={handleAlgorithm} value='quickSort'>Quick Sort</button>
          </nav>
        </li>
      </ul>
    </div>  
  );
}

export default Titlebar;