import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactsItem from './ContactsItem';

export default class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    contactsChunkName: PropTypes.string.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { contactsChunkName, contacts, actions } = this.props

    return (
      <table className='table'>
        <thead>
          <tr>
            <th>{contactsChunkName}</th>
          </tr>    
        </thead>
        <tbody>
          {contacts.map(contact =>
            <ContactsItem key={contact._id} contact={contact} {...actions}/>
          )}
        </tbody>
      </table>
    )
  }
}