// React:
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Style sheets:
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Container from 'react-bootstrap/Container'

// Components:
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Signup from './components/pages/Signup'
import About from './components/pages/About'
import ControlBar from './components/ControlBar'
import Book from './components/Book'

// Utilities:
import uuid from 'uuid'

class App extends Component {
  // Dummy state:
  state = {
    searchField: "",
    contacts: [
      {
        id: uuid.v4(),
        first_name: "Charlie",
        last_name: "Brinicombe",
        age: "21",
        phone: "07791388537",
        email: "cbrinicombe13@googlemail.com",
        occupation: "Student",
        created_at: "01-06-2007, 14:09:58"
      },
      {
        id: uuid.v4(),
        first_name: "Jackie",
        last_name: "Brinicombe",
        age: "55",
        phone: "07789195080",
        email: "jpbrinicombe@me.com",
        occupation: "Marketing Director",
        created_at: "10-04-2004, 18:42:24"
      },
      {
        id: uuid.v4(),
        first_name: "Sean",
        last_name: "Brinicombe",
        age: "55",
        phone: "07721474017",
        email: "sean.brinicombe@lond-amb.nhs.uk",
        occupation: "Stakeholder Engagement Manager",
        created_at: "05-09-20012, 05:45:00"
      },
      {
        id: uuid.v4(),
        first_name: "Helen",
        last_name: "Hopkins",
        age: "23",
        phone: "07810453590",
        email: "hhopkins26@hotmail.com",
        occupation: "Sharedealing Assistant",
        created_at: "25-12-2020, 00:00:00"
      }
    ]
  }

  search = (searchField) => {
    this.setState({
      searchField: searchField,
      contacts: this.state.contacts
    });
  }

  clearContacts = () => {
    this.setState({ contacts: [] });
  }

  addContact = (newContact) => {
    newContact.id = uuid.v4();
    this.setState({ contacts: [...this.state.contacts, newContact]});
  }

  delContact = (id) => {
    this.setState({ contacts: [...this.state.contacts.filter(entry => entry.id !== id)]});
  }

  editContact = (editDetails) => {
    let contacts = this.state.contacts;
    for(var i = 0; i < contacts.length; i++) {
      if(editDetails.id === contacts[i].id) {
        contacts[i] = editDetails;
        this.setState({ contacts: contacts});
        return;
      }
    }
  }

  // Lifecycle method:
  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <Container fluid>
            <Header/>
            <Route exact path = '/Signup' component = {Signup}/>
            <Route exact path = '/About' component = {About}/>
          </Container>
          <Route exact path = '/' render = { props => (
            <React.Fragment>
              <ControlBar
              contacts = {this.state.contacts}
              clearContacts = {this.clearContacts}
              addContact = {this.addContact}
              sendSearch = {this.search}
              />
              <Book
              contacts = {this.state.contacts.filter(contact => {
                return contact.last_name.startsWith(this.state.searchField)}
                )}
              delContact = {this.delContact}
              editContact = {this.editContact}/>
            </React.Fragment>
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
