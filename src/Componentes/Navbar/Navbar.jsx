import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">Productos</Link>
                </li>
                <li>
                    <Link to="/contact">Contáctenos</Link>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;
