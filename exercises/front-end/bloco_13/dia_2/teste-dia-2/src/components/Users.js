// arquivo Users.js
import React, { Component } from 'react';

class Users extends Component {
  render() {
    const {
      greetingsMessage = 'Hi There',
      match: { params: {id} } // Puxa da match o parametro
    } = this.props;

    return (
      <div>
        <h2>Users</h2>
        <p>
          { `${greetingsMessage} User ${id}` }, this is my awesome Users component
        </p>
      </div>
    );
  }
};

export default Users;

