import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    editContact: PropTypes.func.isRequired,
    removeContact: PropTypes.func.isRequired
  }

  render() {
    const { contact, editContact, removeContact } = this.props

    return (
      <tr>
        <td style={{overflow:'hidden'}}>
          <div style={{float:'left'}}>
              <div>{contact.name}</div>
              <div>{contact.mobilePhone}</div>
          </div>    
          <div style={{float:'right'}}>
              <div>
              <button type='button' className='btn btn-info glyphicon glyphicon-pencil' onClick={editContact(contact)}></button>
              <span> &nbsp;&nbsp;&nbsp;</span>
              <button type='button' className='btn btn-danger glyphicon glyphicon-remove' onClick={removeContact(contact)} ></button>
              </div>
          </div>  
        </td>
      </tr>
    )
  }
}
