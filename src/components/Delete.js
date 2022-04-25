// This component will handle Delete query sent to back end (DELETE).
import { useState} from 'react';

function Delete(props) {
    const [idToBeDeleted, setIDToBeDeleted] = useState('');
    let url = 'http://localhost:3010/books/'+ idToBeDeleted

    const deleteHandler = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                bookId: idToBeDeleted,
            })
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(console.log)
            .then(data => props.handleResults(data))
            .catch(error => console.log(error))
    }

    return (
        <div className='Delete-container'>
            <h2>Delete a listing</h2>
            <form>
                <input className="id" placeholder="ID of Book to Delete" onChange={event => setIDToBeDeleted(event.target.value)}></input>
            </form>
            <div className="Delete-buttons">
                <button onClick={ deleteHandler }>Delete Item</button>
            </div>
        </div>
    )
}

export default Delete;