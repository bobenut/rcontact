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
  }
  
  static propTypes = {
    filteredContactChunks: PropTypes.object.isRequired
  }

  static defaultProps = {
    filteredContactChunks: {}
  }

  componentDidMount = () => {
    const { dispatch } = this.props
    dispatch(actionThunks.fetchContacts())
  }

  render() {
    const { filteredContactChunks } = this.props

    return (
      <div className='container' style={{marginTop:'50px'}}>
      <div className='row'>
        <div className='col-lg-4'>
          <h1>Contacts</h1>
        </div>
        <div className='col-lg-8'>
          <div className='panel panel-default' style={{minWidth:'500px', boxShadow:'4px 4px 10px #888888'}}>
            <ContactsOpt />
            <ContactsList contactChunks={filteredContactChunks} />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  filteredContactChunks: state.contactMgr.filteredContactChunks
})

// const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  null
)(ContactsMgr)