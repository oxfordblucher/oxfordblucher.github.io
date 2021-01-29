import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="/">Hiu Chan</a>
            <p class="navbar-nav mr-auto"></p>
            <ul class="navbar-nav mr-right list-group-horizontal" id="navLinks">
                <li class="nav-item">
                    <a class="nav-link active flex-fill" href="/portfolio">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active flex-fill" data-toggle="modal" data-target="#contactModal">Contact</a>
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;