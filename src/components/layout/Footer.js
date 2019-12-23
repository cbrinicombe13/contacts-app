import React from 'react'
import { Link } from 'react-router-dom'
import ReactLogo from './ReactLogo.png'
import BootstrapLogo from './BootstrapLogo.png'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

function Footer() {
    return (
        <footer style = {footerStyle}>
            <Container fluid>
                <Row style = {RowStyle}>
                    <Col style = {{textAlign: 'left', margin: 'auto'}}>
                        <img src = {ReactLogo} alt = 'React Logo' style = {ReactLogoStyle}/>
                    </Col>
                    <Col style = {linkStyle}>
                        <Link to='/'>Home</Link> {' '} | {' '}
                        <Link to='/signup'>Sign Up</Link> {' '} | {' '}
                        <Link to='/about'>About</Link>
                    </Col>
                    <Col style = {{textAlign: 'right', margin: 'auto'}}>
                        <img src = {BootstrapLogo} alt = 'Bootstrap Logo' style = {BootstrapLogoStyle}/>
                    </Col>
                </Row>
            </Container>
            
        </footer>
    )
}

const ReactLogoStyle = {
    width: '20%'
}

const BootstrapLogoStyle = {
    width: '10%'
}

const RowStyle = {
    width: '100%'
}

const footerStyle = {
    background: '#333',
    color: '#ffffff',
    padding: '20px',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%'
}

const linkStyle = {
    textAlign: 'center',
    color: '#ffffff',
    cursor: 'pointer',
    margin: 'auto'
}

export default Footer