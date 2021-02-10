import React from 'react';

const Header = () => {
    return <header className="mb-10px;">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Hiu Chan</a>
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav mr-right">
            <li className="nav-item">
                <a className="nav-link" href="/">Bio</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/projects">Latest</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/connect">Connect</a>
            </li>
        </ul>
    </nav>
    </header>
}

export default Header;