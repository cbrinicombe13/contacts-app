import React, { Component } from 'react'
import { Tabs, Tab, ListGroup, Row, Col, Button, Container, Form } from 'react-bootstrap';
import PropTypes from 'prop-types'

import Connection from '../api/Connection'

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.updates = 0;
        this.conn = new Connection();
        this.state = {
            key: 'myBooks',
            books: [],
            newBook: ''
        }
    }

    componentDidUpdate() {
        if(this.updates > 0) {
            return;
        }
        this.updates++;
        this.conn.readTables().then(resp => {
            this.setState({ books: resp.data.tables});
            this.updates = 0;
        });
    }

    createTable = () => {
        this.setState({ books: [...this.state.books, this.state.newBook] });
        return this.conn.createTable(this.state.newBook);
    }

    onNewBookFormChange = (e) => {
        this.setState({ newBook: e.target.value});
    }

    onSelectTab = (tabKey) => {
        this.setState({ key: tabKey });
    }

    onSelectListItem = (e) => {
        this.props.setActiveBook(e.target.name);
    }

    render() {
        return (
            <Container className = 'no-padding'>
                <Tabs defaultActiveKey='myBooks' activeKey = {this.state.key} onSelect = {this.onSelectTab}>
                    <Tab eventKey = 'myBooks' title = {'My Books (' + this.state.books.length + ')'}>
                        <Container fluid>
                            <Row>
                                <Col md = {8} className = 'no-padding'>
                                    <Form.Control
                                    type = 'text'
                                    name = 'newBookName'
                                    value = {this.state.newBook}
                                    placeholder = 'New book name...'
                                    onChange = {this.onNewBookFormChange}
                                    ></Form.Control>
                                </Col>
                                <Col>
                                    <Button block onClick= {this.createTable}>+ Add Book</Button>
                                </Col>
                            </Row>
                        </Container>
                        <ListGroup variant = 'flush'>
                            {this.state.books.map(book => {
                                return (
                                    <ListGroup.Item action onClick = {this.onSelectListItem} name = {book} key = {book}>{book}</ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </Tab>
                    <Tab eventKey = 'groups' title = 'Groups'>
                        Groups
                    </Tab>
                    <Tab eventKey = 'settings' title = 'Settings'>
                        Settings
                    </Tab>
                </Tabs>
            </Container>
        )
    }
}

SideBar.propTypes = {
    setActiveBook: PropTypes.func.isRequired
}

export default SideBar