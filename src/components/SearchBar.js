import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

export class SearchBar extends Component {
    state = {
        search: ''
    }

    onChange = (e) => {
        e.preventDefault();
        this.setState({ search: e.target.value });
        this.props.onSearch(this.state.search);
    }

    render() {
        return (
            <React.Fragment>
                <Form>
                    <Form.Control input = 'text' placeholder = 'Search...' onChange = {this.onChange}/>
                </Form>
            </React.Fragment>
        )
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default SearchBar
