import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="Nav">

            <div className="nav_brand">
                <div className="nav_brand1">
                    Imaad
                </div>
                <div className="nav_brand2">
                    Photography
                </div>
            </div>

            <li className="nav_list"> 
                <a>Home</a>
                <a>Gallery</a>
                <a>About me</a>
            </li>
            
            <li className="nav_media">
                <a href="https://www.instagram.com/canonymous.ldn/" rel="noreferrer" target="_blank"><i class="fab fa-instagram fa-lg"></i></a>
                <a href="https://www.tiktok.com/@canonymous.ldn?lang=en" rel="noreferrer" target="_blank"><i class="fab fa-tiktok fa-lg"></i></a>
                <a><i class="fab fa-youtube fa-lg"></i></a>
                <a href="mailto:imaaduddin1512@gmail.com"><i class="fas fa-at fa-lg"></i></a>
            </li>
            

        </div>
    )
}

export default Navbar;
