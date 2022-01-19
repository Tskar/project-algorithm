
const Algorithms = (array, algorithmType) => {

    const subArray = array.slice()
    const count = array.length;
    const animation = [];
    const compareColor = 'yellow'
    const swapColor = '#693c3c'

    const swap = (a, i, j) => {
        let temp = a[i];
        a [i] = a[j];
        a[j] = temp;
    }

    const BubbleSortAlgo = () => {

        let i, j
        for (i = 0; i < count; i++) {
            for (j =  0; j < count - (i+1); j++) {
    
                animation.push([j, j+1, compareColor, null])
                if (subArray[j] > subArray[j + 1]) {
                    swap(subArray, j, j + 1)
                    animation.push([j, j+1, swapColor, subArray.slice()])
                    console.log(subArray)
                }
            }
    
        }
    
        return animation;
    }


    const InsertionSortAlgo = () => {
    
        let i,j
        for (i = 0; i < count; i++) {
            for(j = i - 1; j >= 0 && subArray[j] > subArray[j + 1];j--) {

                swap(subArray, j, j + 1)
                animation.push([j, j + 1, compareColor, null])
                animation.push([j, j + 1, swapColor, subArray.slice()])
            }
        }
    
        return animation
    }


    const MergeSortAlgo = () => {

    }


    const SelectionSortAlgo = () => {

        let i,j
        for (i = 0; i < count; i++) {
            for(j = i + 1; j < count; j++ ) {

                animation.push([i,j, compareColor, null])
                if (subArray[i] > subArray[j]) {
                    swap(subArray, i, j)
                    animation.push([i, j, swapColor, subArray.slice()])
                }
            }
        }
        return animation
    }


    const quickSortAlgo = () => {
    
    }

    
    switch(algorithmType) {
        case 'bubbleSort':
            return BubbleSortAlgo();
        case 'insertionSort':
            return InsertionSortAlgo();
        case 'MergeSort':
            return MergeSortAlgo();
        case 'selectionSort':
            return SelectionSortAlgo();    
        case 'quickSort':
            return quickSortAlgo();    
        default:
            return null;
    }
}


export default Algorithms;