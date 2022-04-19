// This component will handle display of individual data object retrieved from backend API

function ResultsInstance({book}) {
    return (
        <div className='Results-instance'>
            <h1>{book.title}</h1>
            <p>Author: {book.author}</p>
            <p>Year Published: {book.year}</p>
            <p>Book ID: {book._id}</p>
        </div>
    )
}
export default ResultsInstance;