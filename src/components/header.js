import { useState, useEffect, useRef } from 'react';
import Logo from "../assets/Logo.png";
import InstaLogo from "./insta.js";
import "../css/header.css";
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [hoverSVG, setHoverSVG] = useState("rgb(var(--navy))");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    function handleMouseEnterSVG() {
        setHoverSVG("rgb(var(--orange))");
    }

    function handleMouseLeaveSVG() {
        setHoverSVG("rgb(var(--navy))");
    }

    function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }

    // Close menu on outside click
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        }

        if (isMenuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <header className={`${isMenuOpen ? "open" : ""}`}>
            <div className="header-container">
                <NavLink id="headerLogo" to="/">
                    <img src={Logo} alt="Logo" />
                </NavLink>
                <button className="burger-menu" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <nav
                    ref={menuRef}
                    className={`nav-links ${isMenuOpen ? "open" : ""}`}
                >
                    <NavLink to="portfolio" onClick={() => setIsMenuOpen(false)}>PORTFOLIO</NavLink>
                    <NavLink to="about" onClick={() => setIsMenuOpen(false)}>ABOUT</NavLink>
                    <NavLink to="contact" onClick={() => setIsMenuOpen(false)}>CONTACT</NavLink>
                    <a
                        onMouseEnter={handleMouseEnterSVG}
                        onMouseLeave={handleMouseLeaveSVG}
                        href="https://instagram.com/racingvisuals.ch"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstaLogo fillColor={hoverSVG} h="25px" w="25px" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
