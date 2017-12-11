import React  from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as contactsMgrActions from '../actions'
import ContactsOpt from '../components/ContactsOpt';
import ContactsList from '../components/ContactsList';

const ContactsMgr = ({contacts, actions}) => (
  <div className='container' style={{marginTop:'50px'}}>
    <div className='row'>
      <div className='col-lg-4'>
        <h1>Contacts</h1>
      </div>
      <div className='col-lg-8'>
        <div className='panel panel-default' style={{minWidth:'500px', boxShadow:'4px 4px 10px #888888'}}>
          <ContactsOpt />
          <ContactsList contacts={contacts} />
          {/* <contactCUDialog /> */}
        </div>
      </div>
    </div>
  </div>
)

ContactsMgr.propTypes = {
  contacts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  contacts: state.contacts
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(contactsMgrActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactsMgr)
