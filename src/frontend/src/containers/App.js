import React from 'react';
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ContactsMgr from './ContactsMgr';
import * as contactsMgrActions from '../actions'

const App = ({contacts, actions}) => (
  <div>
    <ContactsMgr todos={contacts} actions={actions} />
  </div>
)

App.propTypes = {
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
)(App)
