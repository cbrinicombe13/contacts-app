import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'


function Header() {
    return (
        <header style = {headerStyle}>
            <Container fluid>
                <h1>Address Book</h1>
                <Link style = {linkStyle} to='/'>Home</Link> {' '} | {' '}
                <Link style = {linkStyle} to='/signup'>Sign Up</Link> {' '} | {' '}
                <Link style = {linkStyle} to='/about'>About</Link>
            </Container>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#ffffff',
    paddingBottom: '10px',
    textAlign: 'center',
    positon: 'absolute',
    width: '100%'
}

const linkStyle = {
    color: '#ffffff',
    cursor: 'pointer'
}

export default Header;
