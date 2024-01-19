import './Topbar.css';

function Topbar(props) {
    return (
        <>
            <div className="topbar">
                <div className="sortName">
                    Current sort: {props.currentSort} sort
                </div>
                <button className="sortButton" onClick={props.shuffleArray}>
                    Shuffle!
                </button>
                <button className="sortButton" onClick={() => props.doSort(props.currentSort)}>
                    Sort!
                </button>
            </div>
        </>
    )
}

export default Topbar