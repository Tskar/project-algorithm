import React from "react";


const BubbleSortAlgo = ({array}) => {

    const swap = (a, i, j) => {
        let temp = a[i];
        a [i] = a[j];
        a[j] = temp;
    };

    const sortHandler = (e) => {

        const count = array.length;

        for (let i = 0; i < count; i++) {
            for (let j =  1; j < count; j++) {

                if (array[j - 1] > array[j]) {
                        swap(array, j - 1, j);
                        console.log(array)
                    }
                }
        }
    }
        
    return (
        <button onClick={sortHandler}>Sort</button>
    );
};

export default BubbleSortAlgo;
