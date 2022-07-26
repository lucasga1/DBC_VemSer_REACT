import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre" target="_blank" rel="noopener noreferrer">About</Link></li>
                    <li><Link to="/contato" target="_blank" rel="noopener noreferrer">Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header