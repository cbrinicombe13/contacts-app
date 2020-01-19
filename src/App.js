// React:
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Stylesheets:
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { Container, Row, Col } from 'react-bootstrap'

import Connection from './api/Connection'

// Components:
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
import AddressBook from './components/AddressBook'
import SideBar from './components/SideBar'

class App extends Component {

  constructor(props) {
    super(props);
    this.conn = new Connection();
    this.state = {
      activeBook: 'user0Book0'
    }
  }

  setActiveBook = (activeBook) => {
    this.setState({ activeBook: activeBook });
  }

  createTable = () => {
    return this.conn.createTable('textBook').then(resp => {
      console.log(resp);
    });
  }

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
                  <SideBar setActiveBook = {this.setActiveBook} createTable = {this.createTable}/>
                </Col>
                <Col>
                  <AddressBook activeBook = {this.state.activeBook}/>
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