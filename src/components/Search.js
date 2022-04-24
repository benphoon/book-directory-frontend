// This component will handle search query sent to back end.

function Search(props) {
    const retrieve = () => {
        fetch('http://localhost:3010/books')
            .then(response => response.json())
            .then(result => {
                props.handleResults(result)
                // console.log(result)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className='Search-container'>
            <h2>Search the library</h2>
            <div className='Search-params'>
                <select>
                    <option value="author">by author</option>
                    <option value="title">by title</option>
                    <option value="id">by book ID</option>
                </select>
                <input placeholder='...'></input>
            </div>
            <button>Search</button>
            <button onClick={retrieve}>Show All</button>
        </div>
    )
}

export default Search;
