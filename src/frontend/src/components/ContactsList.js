import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactsList extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired
  }

  render() {
    return (
      <div className="panel-body">  
        <div style={{float: 'left',width:'100%'}}>
          
        </div>
      </div>
    )
  }
}