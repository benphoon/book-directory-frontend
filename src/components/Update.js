// This component will handle update query sent to back end (PATCH).

function Update() {

    return (
        <div className='Update-container'>
            <h2>Update a listing</h2>
            <form>
                <input className="id" placeholder="ID of Book to Update"></input>
                <input className="title" placeholder="Book Title"></input>
                <input className="author" placeholder="Author"></input>
            </form>
            <div className="Update-buttons">
                <button>Submit Update</button>
                <button>Delete Item</button>
            </div>
        </div>
    )
}

export default Update;
