// Function to perform optimized bubble sorts and also generate an array indicating the swaps used
function generateBubbleSortSwaps(array) {
    const swaps = [];

    do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i-1] > array[i]) {
                swapped = true;
                swaps.push([i-1, i]);
                [array[i-1], array[i]] = [array[i], array[i-1]]                
            }
        }
    } while (swapped);

    return swaps;
}

export default generateBubbleSortSwaps