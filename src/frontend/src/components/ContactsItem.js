import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Popconfirm from 'antd/lib/popconfirm'
import 'antd/lib/popover/style/index.css'

export default class TodoItem extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired,
    onEditContact: PropTypes.func.isRequired,
    onRemoveContact: PropTypes.func.isRequired,
    onCancelRemoveContact: PropTypes.func.isRequired
  }

  state = {
    removeConfirmVisible: false
  }

  handleEditContact = (e) => {
    this.props.onEditContact(this.props.contact)
  }

  handleRemoveContact = (e) => {
    this.setState({ removeConfirmVisible: true });
    
  }

  handleConfirmRemove = () => {
    this.setState({ removeConfirmVisible: false });
    this.props.onRemoveContact(this.props.contact)
  }

  handleCancelRemove = () => {
    this.setState({ removeConfirmVisible: false });
    this.props.onCancelRemoveContact(this.props.contact)
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
              <Popconfirm
                title="Are you sure delete this contact?"
                okText="Yes"
                cancelText="No"
                visible={this.state.removeConfirmVisible}
                onConfirm={this.handleConfirmRemove}
                onCancel={this.handleCancelRemove}>
                <button type='button' className='btn btn-danger glyphicon glyphicon-remove' onClick={this.handleRemoveContact} ></button>
              </Popconfirm>
              </div>
          </div>  
        </td>
      </tr>
    )
  }
}
