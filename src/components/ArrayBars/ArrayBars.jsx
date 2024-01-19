import './ArrayBars.css';

/* Props: 
    props.bars = Array of bars used to store the current order of the generated bars
    props.number = Number of bars to generate
    props.selected = Current bars that are undergoing a swap
    props.isFinished = Boolean value which indicates whether the bars are sorted (true) or not (false)
*/
function ArrayBars(props) {
    return (
        <>
            <div className="bar-wrapper">
                {props.bars.map((value, index) => (
                <div
                    className="bar"
                    key={index}
                    /*  Background color changes for a bar to red if a swap is currently occurring involving it 
                        Background color for all bars changes to green if all have been sorted
                    */
                    style={props.isFinished ? 
                        { height: `${value * (100 / props.number / 2)}vh`, width: `${(100 / props.number)}vw`, margin: `0 ${(100 / props.number / 10)}vw`,     
                            backgroundColor: 'green'} 
                            :
                        { height: `${value * (100 / props.number / 2)}vh`, width: `${(100 / props.number)}vw`, margin: `0 ${(100 / props.number / 10)}vw`,     
                            backgroundColor: index == props.selected[0] || index == props.selected[1] ? 'red' : '#3498db'}}
                ></div>
                ))}
            </div>
        </>
    )
}

export default ArrayBars