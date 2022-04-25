// This component will handle submission query sent to back end (POST).
import { useState } from 'react';

function Submit(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState();
    const [author, setAuthor] = useState('');

    const submitHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: title,
                year: year,
                author: author
            })
        };
        fetch('http://localhost:3010/books', requestOptions)
            .then(response => response.json())
            .then(data => props.handleResults(data))
            .catch(error => console.log(error))
    }

    return (
        <div className='Submit-container'>
            <div className="Submission-info">
                <h2>Submit a listing</h2>
                <form>
                    <input className="title" placeholder="Book Title" onChange={event => setTitle(event.target.value)}></input>
                    <input className="author" placeholder="Author's Name" onChange={event => setAuthor(event.target.value)}></input>
                    <input className="year" placeholder="Year Published" onChange={event => setYear(event.target.value)}></input>
                </form>
                <button onClick={submitHandler}>Submit</button>
            </div>
            <div className="Submission-result">

            </div>
        </div>
    )
}

export default Submit;
