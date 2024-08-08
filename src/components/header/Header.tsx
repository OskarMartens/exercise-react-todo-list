import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css';

export default function Header() {
  return (
    <header>Header
        <Link to="/">
            Create Todo
        </Link>
        <Link to="/about">
            About and list of todos
        </Link>
    </header>
  )
}
