import React, { Component } from 'react'
import { Tabs, Tab, ListGroup, Row, Col, Container, Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            key: 'myBooks',
        }
    }

    onSelectTab = (tabKey) => {
        this.setState({ key: tabKey});
    }

    onSelectListItem = (e) => {
        this.props.setActiveBook(e.target.name);
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        
                    </Col>
                </Row>
                <Tabs defaultActiveKey='myBooks' activeKey = {this.state.key} onSelect = {this.onSelectTab}>
                    <Tab eventKey = 'myBooks' title = 'My Books'>
                        <Button onClick = {this.props.createTable}>+ New Book</Button>
                        <ListGroup variant = 'flush'>
                            <ListGroup.Item action onClick = {this.onSelectListItem} name = 'user0Book0'>Book 1</ListGroup.Item>
                            <ListGroup.Item action onClick = {this.onSelectListItem} name = 'user0Book1'>Book 2</ListGroup.Item>
                            <ListGroup.Item action onClick = {this.onSelectListItem} name = 'user0Book2'>Book 3</ListGroup.Item>
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
    setActiveBook: PropTypes.func.isRequired,
    createTable: PropTypes.func.isRequired
}

export default SideBar