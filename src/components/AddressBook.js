import React, { Component } from 'react'

import ControlBar from './ControlBar'
import Book from './Book'

// Utilities:
import uuid from 'uuid'
import Connection from '../api/Connection'

export default class AddressBook extends Component {

    constructor(props) {
        super(props);
        this.conn = new Connection();
        this.state = {
          searchField: "",
          contacts: []
        }
      }

    // Set state with contacts from API:
    componentDidMount() {
        return this.conn.read().then(resp => {
            this.setState({ contacts: resp.data.data });
                console.log(resp.data.data);
        });
    }

    // Filter book contents on type:
    onSearch = (searchField) => {
        return this.setState({
            searchField: searchField,
        });
    }

    // Clear all entries in book:
    clearContacts = () => {
        this.setState({ contacts: [] });
            return this.conn.clear().then(resp => {
                console.log(resp);
        });
    }

    // Add new entries to book:
    addContact = (newContact) => {
        newContact.id = uuid.v4();
        this.setState({ contacts: [...this.state.contacts, newContact]});
        return this.conn.create(newContact).then(resp => {
            console.log(resp);
        })
    }

    // Delete entries from book on click:
    delContact = (id) => {
        this.setState({ contacts: [...this.state.contacts.filter(entry => entry.id !== id)]});
        return this.conn.delete(id).then(resp => {
            console.log(resp);
        });
    }

    // Edit single entry from book on click:
    editContact = (editDetails) => {
        let contacts = this.state.contacts;
        for(var i = 0; i < contacts.length; i++) {
            if(editDetails.id === contacts[i].id) {
                contacts[i] = editDetails;
                this.setState({ contacts: contacts });
            }
        }
        return this.conn.update(editDetails).then(resp => {
            console.log(resp);
        });
    }

    render() {
        return (
            <React.Fragment>
              <ControlBar
                contacts = {this.state.contacts}
                clearContacts = {this.clearContacts}
                addContact = {this.addContact}
                onSearch = {this.onSearch}
              />
              <Book
                contacts = {this.state.contacts.filter(contact => {
                            return contact.last_name.startsWith(this.state.searchField);
                            })}
                delContact = {this.delContact}
                editContact = {this.editContact}
              />
            </React.Fragment>
        )
    }
}
