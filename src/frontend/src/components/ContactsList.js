import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
import message from 'antd/lib/message'
import 'antd/lib/message/style/index.css'

import 'antd/lib/modal/style/index.css'
import 'antd/lib/button/style/index.css'
import ContactsChunk from './ContactsChunk';
import ContactForm from './ContactForm'
import * as actionThunks from '../thunks'

class ContactsList extends Component {
  static propTypes = {
    contactChunks: PropTypes.object.isRequired
  }

  state = {
    savingEditedContact: false,
    editContactModalVisible: false,
    editContact: null
  }

  doEditContact = (contact) => {
    this.setState({ editContact: contact });

    this.openEditContactModal()
    console.log('do editContact: %s', contact)
  } 

  doRemoveContact = (contact) => {
    console.log('do removeContact: %s', contact)
    const { dispatch } = this.props
    dispatch(actionThunks.removeContact(contact, this.removeContactSuccess, this.removeContactFailed))
  } 

  doCancelRemoveContact = (contact) => {
    message.info('cancel to remove contact.');
  } 

  removeContactSuccess = (contact) => {
    message.success('remove contact success.');
  }

  removeContactFailed = (error) => {
    message.error('remove contact failed.');
  }

  openEditContactModal = () => {
    this.setState({ editContactModalVisible: true });
  }

  closeEditContactModal = () => {
    this.setState({ editContactModalVisible: false });
  }

  handleSubmitEdittedContact = () => {
    
    this.refs.form.validateFields((err, values) => {
      if(err) {
        return;
      }

      this.setState({ savingEditedContact: true });

      this.saveEdittedContact({
        _id: values._id,
        name: values.name, 
        nameFirstWordChr: values.nameFirstWordChr, 
        nameAllWordChr: values.nameAllWordChr, 
        corp: values.corp, 
        mobilePhone: values.mobilePhone,
        mail: values.mail
      })
    });
  }

  saveEdittedContact = (contact) => {
    const { dispatch } = this.props
    dispatch(actionThunks.saveEdittedContact(contact, this.saveEdittedContactSuccess, this.saveEdittedContactFailed))
  }

  saveEdittedContactSuccess = (contact) => {
    this.setState({ savingEditedContact: false, editContactModalVisible: false });
    message.success('edit contact success.');
  }

  saveEdittedContactFailed= (error) => {
    message.error('remove contact failed: %s', error.message);
  }

  render() {
    const { contactChunks } = this.props

    const { 
      editContactModalVisible, 
      savingEditedContact, 
      editContact 
    } = this.state;

    const actions = { 
      onEditContact: this.doEditContact, 
      onRemoveContact: this.doRemoveContact,
      onCancelRemoveContact: this.doCancelRemoveContact 
    }

    return (

      <div className="panel-body">  
        <div style={{float: 'left',width:'100%'}}>
          {Object.keys(contactChunks).map(letter => {
              if(contactChunks[letter].length > 0) {
                return <ContactsChunk key={letter} contactsChunkName={letter} contacts={contactChunks[letter]} actions={actions}/>
              }
            }
          )}
        </div>
        <Modal 
          visible={editContactModalVisible}
          title="Contacts"
          onOk={this.handleSubmitEdittedContact}
          onCancel={this.closeEditContactModal}
          footer={[
            <Button key="back" onClick={this.closeEditContactModal}>close</Button>,
            <Button key="submit" type="primary" loading={savingEditedContact} onClick={this.handleSubmitEdittedContact}>
              save
            </Button>,
          ]}>
          <ContactForm ref="form" contact={editContact}/>
        </Modal>
      </div>
    )
  }
}

export default connect(
  null,
  null
)(ContactsList)