import "./navbar.scss"
export default function Navbar() {
    return (
        <nav id='nav-bar'>
            <h2 id='name-nav'>Andy Brown</h2>
            <ul id='nav-links'>
                <li><a href="#main">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>);
}