import React from 'react';
import NavbarTop from './NavbarTop';
import Links from './Links';
import '../style.css'

const App = () => {
    window.onscroll = scrollFunction;
    return(
        <div className='container'>
            <NavbarTop />
            <Links />
            <div className='container'>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            <p>d</p>
            </div>
        </div>
    )
}

const scrollFunction = () => {
    const links = document.getElementById("links")
    const sticky = links.offsetTop
    if (window.pageYOffset > sticky) {
        links.classList.add("sticky");
    } else {
        links.classList.remove("sticky");
    }
}

export default App;