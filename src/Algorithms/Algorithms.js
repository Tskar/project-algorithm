
const Algorithms = (array, algorithmType) => {

    const subArray = array.slice()
    const count = array.length;
    const animation = [];
    const compareColor = 'yellow'
    const swapColor = '#693c3c'


    const swap = (a, i, j) => {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }

    //Bubble sort
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

    //Insertion sort
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

    //Merge sort helper function 
    const mergeSortMerger = (subArray, left, mid, right) => {
        let i = left, j = mid + 1

        const holder = []

        while((i <= mid) && (j <= right)){
            animation.push([i, j, compareColor, null])
            if(subArray[i] <= subArray[j]){
                holder.push(subArray[i++])
            }
            else {
                holder.push(subArray[j++])
            }
        }

        while (i <= mid) {
            animation.push([i, null, compareColor, null])
            holder.push(subArray[i++])
        }

        while (j <= right) {
            animation.push([null, j, compareColor, null])
            holder.push(subArray[j++])
        }

        for(i = left; i <= right; i++){
            subArray[i] = holder[i-left]
            animation.push([i,null, swapColor, subArray.slice()])
        }
    }

    //Recursive merge function
    const mergeSortRec = (subArray, left, right) => {

        if(left >= right) {return null}

        const mid = Math.floor((left + right) / 2)

        mergeSortRec(subArray, left, mid)
        mergeSortRec(subArray, mid +1, right)

        mergeSortMerger(subArray, left, mid, right)
    }


    //Merge sort
    const MergeSortAlgo = () => {
        
        mergeSortRec(subArray, 0, subArray.length - 1)

        return animation
    }

    //Selection sort
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

    //partition of the array with pivot for quick sort
    const partition  = (subArray, low, high) => {

        let pivot = subArray[high]
        let i, j
        i = (low - 1)

        for (j = low; j <= high- 1; j++){

            animation.push([j, high, compareColor, null])
            if (subArray[j] < pivot){

                i++;
                swap(subArray, i,j)
                animation.push([i, j, swapColor, subArray.slice()])

            }
        }
        swap (subArray, i+1, high)
        animation.push([i+1, high, swapColor, subArray.slice()])

        return (i + 1)
    }

    //Recursive qucikSort function
    const quickSortRec = (subArray, low, high) => {

        if(low < high) {
           let partitionIndex = partition(subArray, low, high)
            
            quickSortRec(subArray, low, partitionIndex - 1)
            quickSortRec(subArray, partitionIndex + 1, high)
        }
        else {
            return null
        }
    }

    //Quick sort
    const quickSortAlgo = () => {

        quickSortRec(subArray, 0, subArray.length - 1)

        return animation
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