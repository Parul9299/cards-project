
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <nav>
            <div className="logo">
                <Link to='/'>
                    <img src="https://www.freeiconspng.com/thumbs/logo-design/rainbow-logo-design-transparent-0.png" alt="logo not available" width={76} />
                </Link>
            </div>

            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/service'>Services</Link>
            </ul>
        </nav>
        </>
    )
}

export default Navbar;