// This component will handle submission query sent to back end (POST).

function Submit() {
    let submissionData = {
        // Need to access values of inputs for Title, Author, Year here somehow in order to set submission data for post method
    }
    
    const submission = (submissionData = {}) => {
        fetch('http://localhost:3010/books', {
            method: 'POST'
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='Submit-container'>
            <div className="Submission-info">
                <h2>Submit a listing</h2>
                <form>
                    <input className="title" placeholder="Book Title"></input>
                    <input className="author" placeholder="Author's Name"></input>
                    <input className="year" placeholder="Year Published"></input>
                </form>
                <button onClick={submission}>Submit</button>
            </div>
            <div className="Submission-result">

            </div>
            </div>
    )
}

export default Submit;
