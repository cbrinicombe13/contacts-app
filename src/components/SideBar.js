import React from 'react'

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default function SideBar() {

    const [key, setKey] = React.useState('myBooks');

    return (
        <React.Fragment>
            <Tabs defaultActiveKey='myBooks' activeKey = {key} onSelect = {key => setKey(key)}>
                <Tab eventKey = 'myBooks' title = 'My Books'>
                    My Books
                </Tab>
                <Tab eventKey = 'groups' title = 'Groups'>
                    Groups
                </Tab>
                <Tab eventKey = 'settings' title = 'Settings'>
                    Settings
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}
