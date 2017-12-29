import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onEditContact: PropTypes.func.isRequired,
    onRemoveContact: PropTypes.func.isRequired
  }

  handleEditContact = (e) => {
    this.props.onEditContact(this.props.contact)
  }

  handleRemoveContact = (e) => {
    this.props.onRemoveContact(this.props.contact)
  }

  render() {
    const { contact } = this.props

    return (
      <tr>
        <td style={{overflow:'hidden'}}>
          <div style={{float:'left'}}>
              <div>{contact.name}</div>
              <div>{contact.mobilePhone}</div>
          </div>    
          <div style={{float:'right'}}>
              <div>
              <button type='button' className='btn btn-info glyphicon glyphicon-pencil' onClick={this.handleEditContact}></button>
              <span> &nbsp;&nbsp;&nbsp;</span>
              <button type='button' className='btn btn-danger glyphicon glyphicon-remove' onClick={this.handleRemoveContact} ></button>
              </div>
          </div>  
        </td>
      </tr>
    )
  }
}
