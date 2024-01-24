import './App.css'
import { useState, useEffect } from 'react';
import Topbar from './components/Topbar/Topbar';
import ArrayBars from './components/ArrayBars/ArrayBars'
import generateBubbleSortSwaps from './sorting_algorithms/BubbleSort';
import generateSelectionSortSwaps from './sorting_algorithms/SelectionSort';
import generateInsertionSortSwaps from './sorting_algorithms/InsertionSort';
import generateMergeSortSwaps from './sorting_algorithms/MergeSort';

function App() {

  // To render the bars, number = number of bars - default is 100
  const [bars, setBars] = useState([]);
  const [number, setNumber] = useState(100);

  // Track the current sort method selected - default is bubble sort on first render
  const [currentSort, setSort] = useState("Bubble");

  // Track the current sorting speed selected - default is 50 ms
  const [speed, setSpeed] = useState(50);

  // Track the current bars that are being "selected" for a swap
  const [selected, setSelected] = useState([null,null]);

  // Track whether the array bars have been sorted or not
  const [finished, setFinished] = useState(false);

  // Shuffle when page loads
  useEffect(() => {
    shuffleArray();
  }, []);

  // Uses Durstenfeld algorithm to shuffle array
  const shuffleArray = () => {
    const newBars = [];

    for (let i = 0; i < number; i++) {
      newBars.push(i+1);
    }

    for (var i = newBars.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newBars[i];
      newBars[i] = newBars[j];
      newBars[j] = temp;
    }

    setFinished(false);
    setBars(newBars);
  };

  // Sort based on the current sort selected
  const doSort = (type) => {
    setFinished(false);
    
    // Using a promise to allow for a timeout delay in the loops that swap bars
    const timer = ms => new Promise(resolve => setTimeout(resolve, ms));

    // Sorting algorithms generate an array containing all the swaps needed to perform the sort
    let swaps = [];
    const tempBars = [...bars];

    // Function which iterates through the array of swaps and performs them visually
    async function animateSwaps() {
      for (let i = 0; i < swaps.length; i++) {
        const [first, second] = [swaps[i][0], swaps[i][1]];
        setSelected([first, second]);
        [tempBars[swaps[i][0]], tempBars[swaps[i][1]]] = [tempBars[swaps[i][1]], tempBars[swaps[i][0]]]
        setBars([...tempBars]);
        await timer(speed);
      }
      setSelected([null,null]);
      
      setFinished(true);
    }

    // Switch statement for each type of sort
    switch (type) {
      case "Bubble":
        swaps = generateBubbleSortSwaps(bars);      
        animateSwaps();
        break;
      
      case "Selection":
        swaps = generateSelectionSortSwaps(bars);  
        animateSwaps();
        break;

      case "Insertion":
        swaps = generateInsertionSortSwaps(bars);
        animateSwaps();
        break;

      case "Merge":
        swaps = generateMergeSortSwaps(bars);
        animateSwaps();
        break;
    }  
    
  };

  return (
    <>
      <div className='app'>
        {/* Top bar component*/}
        <Topbar shuffleArray={shuffleArray} doSort={doSort} currentSort={currentSort}></Topbar>

        {/* Bars component */}
        <ArrayBars bars={bars} number={number} selected={selected} isFinished={finished}></ArrayBars>

        {/* Buttons */}
        <div className='bottom-wrapper'>
          <header className='sort-header'>Select your sort:</header>
          <div className="button-wrapper">
            <button onClick={() => setSort("Bubble")}>Bubble Sort</button>
            <button onClick={() => setSort("Selection")}>Selection Sort</button>
            <button onClick={() => setSort("Insertion")}>Insertion Sort</button>
            <button onClick={() => setSort("Merge")}>Merge Sort</button>
            <button onClick={() => setSort("Quick")}>Quick Sort</button>
            <button onClick={() => setSort("Heap")}>Heap Sort</button>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
