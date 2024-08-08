import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header className='header'>
        <Link to="/" className='header-link'>
            Create Todo
        </Link>
        <Link to="/about" className='header-link'>
            About and list of todos
        </Link>
    </header>
  )
}
