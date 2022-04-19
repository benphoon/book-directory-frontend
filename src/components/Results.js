// This component will handle display of data retrieved from backend API
import ResultsInstance from "./ResultsInstance";


function Results(props) {
    console.log(props.data)
    let displayData = props.data
    let displayToggle = props.displayToggle

    if (displayToggle === true) {
        return (
            <div className='Results-container'>
                <h2>Results</h2>
                <div className='Results'>
                    {displayData && displayData.map(book =>
                        <ResultsInstance book={book}/>
                    )}
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
export default Results;