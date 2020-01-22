import React, { Component } from 'react'
import AddModal from './AddModal'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import SearchBar from './SearchBar'

export class ControlBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Container fluid>
                    <Row>
                        <AddModal contacts = {this.props.contacts} addContact = {this.props.addContact}/>
                        <SearchBar onSearch = {this.props.onSearch}/>
                        <Button onClick = {this.props.clearContacts}>Clear</Button>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

ControlBar.propTypes = {
    contacts: PropTypes.array.isRequired,
    clearContacts: PropTypes.func.isRequired,
    addContact: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
}

export default ControlBar
