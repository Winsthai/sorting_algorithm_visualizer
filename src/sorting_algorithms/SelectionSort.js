// Function to perform selection sort and also generate an array indicating the swaps used
function generateSelectionSortSwaps(array) {
    const swaps = [];

    let i, j, minimum_index;
    for (i = 0; i < array.length - 1; i++) {
        // Find minimum element in the non-sorted elements
        minimum_index = i;
        for (j = i + 1; j < array.length; j++) {
            if (array[j] < array[minimum_index]) {
                minimum_index = j;
            }
        }

        // Swap minimum and current element, and also push indices to swaps array
        if (i != minimum_index) {
            swaps.push([i, minimum_index]);
        }
        [array[i], array[minimum_index]] = [array[minimum_index], array[i]];
    }

    return swaps;
}

export default generateSelectionSortSwaps