import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContactsOpt from '../components/ContactsOpt';
import ContactsList from '../components/ContactsList';
import * as actionThunks from '../thunks'

class ContactsMgr extends Component {
  constructor(props) {
    super(props)
    
    console.log('ContactsMgr state: %s', JSON.stringify(this.state))
  }
  
  static propTypes = {
    contactChunks: PropTypes.object.isRequired
  }

  static defaultProps = {
    contactChunks: {}
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(actionThunks.fetchContacts())
  }

  editContact = (contact) => {
    // const { dispatch } = this.props
    console.log('do editContact: %s', contact)
  } 

  removeContact = (contact) => {
    console.log('do removeContact: %s', contact)
    const { dispatch } = this.props
    dispatch(actionThunks.removeContact(contact))
  } 

  render() {
    const { contactChunks } = this.props

    const actions = { editContact: this.editContact, removeContact: this.removeContact }

    return (
      <div className='container' style={{marginTop:'50px'}}>
      <div className='row'>
        <div className='col-lg-4'>
          <h1>Contacts</h1>
        </div>
        <div className='col-lg-8'>
          <div className='panel panel-default' style={{minWidth:'500px', boxShadow:'4px 4px 10px #888888'}}>
            <ContactsOpt />
            <ContactsList contactChunks={contactChunks} actions={actions} />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  contactChunks: state.contactMgr.contactChunks
})

// const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  null
)(ContactsMgr)