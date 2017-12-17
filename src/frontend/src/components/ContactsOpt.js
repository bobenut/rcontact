import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ContactsOpt extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired
  }

  static defaultProps = {
    addContact: () => {}
  }

  // componentDidMount = () => {
  //   alert('did mount')
  // }

  render() {
    return (
      <div className="panel-heading" style={{overflow: 'hidden'}}>
        <button id='btnCreate' style={{float:'left'}}>
          <span className="glyphicon glyphicon-plus"></span>
        </button>
        <input className='form-control' type='text' placeholder='search by name' style={{float:'right',width:'200px'}} />
      </div>
    )
  }
}