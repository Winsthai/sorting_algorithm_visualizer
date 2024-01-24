// Function to perform merge sort and also generate an array indicating the swaps used
function generateMergeSortSwaps(array) {
    const swaps = [];

    // We need to keep a copy of the array that is never modified so we know the indices of each bar
    const array_copy = [...array];

    function mergeSort(start, end) {
        if (start < end) {
            let mid = Math.floor((start + end) / 2);
            mergeSort(start, mid);
            mergeSort(mid + 1, end);
            merge(start, mid, end);
        }
    }

    // 
    function merge(start, mid, end) {
        let k = start;
        let i = start;
        let j = mid + 1;
        while (i <= mid && j <= end) {
            if (array_copy[i] <= array_copy[j]) {
                swaps.push([k, i]);
                array[k++] = array_copy[i++];
            } else {
                swaps.push([k, j]);
                array[k++] = array_copy[j++];
            }
        }

        // Finishing the merge by adding the leftover elements from either the left or right side
        while (i <= mid) {
            swaps.push(k, i);
            array[k++] = array_copy[i++];
        }
        while (j <= end) {
            swaps.push(k, j);
            array[k++] = array_copy[j++];
        }
    }
    
    mergeSort(0, array.length - 1);
    console.log(array);

    return swaps;
}

export default generateMergeSortSwaps