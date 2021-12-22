import './animationWindow.css'
import React, { useEffect, useState } from 'react';
import BubbleSortAlgo from '../../Algorithms/BubbleSortAlgo';

function AnimationWindow () {

    const [array, setArray] = useState([]);

    useEffect (() => {

        createArray();
    }, []);

    const createArray=() => {
        const array = [];

        for (let i = 0; i < 10; i++) {
            array.push(randomNumber(5, 200));
        }

        setArray(array);
        console.log(array);
    }

    function randomNumber(minimumNumber, maximumNumber) {
        return Math.floor(Math.random() * parseInt((maximumNumber-minimumNumber) + minimumNumber));
    }
    

    return (
        <div className='displayPage'>
            {array.map((item, idx) => 
                (<div key={idx} className='array-bars' 
                    style={{height: `${item}px`}}>
                        {item}
                </div>)
            )}
            <button className='generate' onClick={() => createArray()}>Generate</button>
            <BubbleSortAlgo array = {array} />
        </div>
    );
};

export default AnimationWindow;