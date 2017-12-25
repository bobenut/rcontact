import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { openContactCUDialogAsNew } from '../actions'


class ContactsOpt extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired
  }

  static defaultProps = {
    addContact: () => {}
  }

  openContactCUDialog = () => {
    const { dispatch } = this.props
    dispatch(openContactCUDialogAsNew())
  }

  render() {
    return (
      <div className="panel-heading" style={{overflow: 'hidden'}}>
        <button id='btnCreate' style={{float:'left'}} >
          <span className="glyphicon glyphicon-plus" onClick={this.openContactCUDialog} ></span>
        </button>
        <input className='form-control' type='text' placeholder='search by name' style={{float:'right',width:'200px'}} />
      </div>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  null,
  null
)(ContactsOpt)