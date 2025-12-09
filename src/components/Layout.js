// Layout applied to every page

import { Link, Outlet } from 'react-router-dom';
import logo from '../logo.png';
import '../css/Layout.css';

export default function Layout() {
    return (
        <div className="page-layout">
            <header className="brand-header">
                <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
                <h1>Melanie Lau</h1>
                <nav className ="page-nav">
                    <Link to="/">Home</Link>
                    <Link to="/writing">Writing</Link>
                    <Link to="/photography">Photography</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="footer">© 2025 Melanie Lau. All rights reserved.
            <nav className="footer-nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            </footer>
        </div>
    );
}