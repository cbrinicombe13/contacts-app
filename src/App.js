// React:
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Stylesheets:
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

// Components:
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
import AddressBook from './components/AddressBook'
import SideBar from './components/SideBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Container fluid>
            <Header/>
            <Route exact path = '/Signup' component = {Signup}/>
            <Route exact path = '/About' component = {About}/>
          </Container>
          <Route exact path = '/' render = { props => (
            <Container fluid>
              <Row>
                <Col md = {3}>
                  <SideBar/>
                </Col>
                <Col>
                  <AddressBook/>
                </Col>
              </Row>
            </Container>
          )}/>
          <Container fluid>
            <Footer />
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;