import React, { Component } from 'react';

class EditEmployee extends Component {
    render() {
        return (
            <div>
                <h1>The selected ID is {this.props.match.params.id}</h1>
            </div>
        );
    }
}

export default EditEmployee;