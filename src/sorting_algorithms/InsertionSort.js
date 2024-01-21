// Function to perform insertion sort and also generate an array indicating the swaps used
function generateInsertionSortSwaps(array) {
    const swaps = [];

    let i, j, key;

    // Go through array one element at a time and grow a sorted list on the left
    for (i = 1; i < array.length; i++) {
        key = array[i];
        j = i - 1;

        while (j >= 0 && key < array[j]) {
            array[j+1] = array[j];
            swaps.push([j, j+1]);
            j--;
        }
        array[j+1] = key;
    }

    return swaps;
}

export default generateInsertionSortSwaps