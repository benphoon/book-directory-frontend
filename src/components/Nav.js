import { Link } from 'react-router-dom'

function Nav({clearData}) {
    return (
        <nav>
            <div className='nav-container'>
                <Link onClick={clearData} className='default-link' to='/search'>
                    <li>Search</li>
                </Link>
                <Link onClick={clearData} className='default-link' to='/submit'>
                    <li>Submit</li>
                </Link>
                <Link onClick={clearData} className='default-link' to='/update'>
                    <li>Update</li>
                </Link>
            </div>
        </nav>
    )
}
export default Nav;
