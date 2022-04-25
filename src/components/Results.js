// This component will handle display of data retrieved from backend API
import ResultsInstance from "./ResultsInstance";


function Results(props) {
    // console.log(props.data)
    let displayData = props.data
    let displayToggle = props.displayToggle
    let isDeletion = props.isDeletion
    console.log(isDeletion)

    if (displayToggle === true && isDeletion === false) {
        return (
            <div className='Results-container'>
                <h2>Results</h2>
                <div className='Results'>
                    {displayData && displayData.map(book =>
                        <ResultsInstance key={book._id} book={book}/>
                    )}
                </div>
            </div>
        )
    } else if (displayToggle === true && isDeletion === true) {
        return (
            <div>
                <h2>Item deleted successfully</h2>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default Results;