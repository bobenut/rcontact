import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Modal from 'antd/lib/modal'
import Button from 'antd/lib/button'
import 'antd/lib/modal/style/index.css'
import 'antd/lib/button/style/index.css'
import ContactForm from './ContactForm'
import * as actionThunks from '../thunks'

class ContactsOpt extends Component {
  state = {
    savingNewContact: false,
    newContactModalVisible: false,
  }

  static propTypes = {
    addContact: PropTypes.func.isRequired
  }

  static defaultProps = {
    addContact: () => {}
  }

  openNewContactModal = () => {
    this.setState({ newContactModalVisible: true });
  }

  closeNewContactModal = () => {
    this.setState({ newContactModalVisible: false });
  }

  handleSubmitNewContact = () => {
    this.refs.form.validateFields((err, values) => {
      if(err) {
        return;
      }

      this.setState({ savingNewContact: true });

      this.saveNewContact({
        name: values.name, 
        nameFirstWordChr: values.nameFirstWordChr, 
        nameAllWordChr: values.nameAllWordChr, 
        corp: values.corp, 
        mobilePhone: values.mobilePhone,
        mail: values.mail
      })
    });
  }

  saveNewContact = (contact) => {
    const { dispatch } = this.props
    dispatch(actionThunks.saveNewContact(contact, this.saveNewContactSuccessed, this.saveNewContactSucce))
  }

  saveNewContactSuccessed = (contact) => {
    this.setState({ savingNewContact: false, newContactModalVisible: false });
  }

  saveNewContactSucce = (error) => {
    
  }

  render() {
    const { newContactModalVisible, savingNewContact } = this.state;

    return (
      <div className="panel-heading" style={{overflow: 'hidden'}}>
        <button id='btnCreate' style={{float:'left'}} >
          <span className="glyphicon glyphicon-plus" onClick={this.openNewContactModal} ></span>
        </button>
        <Modal 
          visible={newContactModalVisible}
          title="Contacts"
          onOk={this.handleSaveNewContact}
          onCancel={this.closeNewContactModal}
          footer={[
            <Button key="back" onClick={this.closeNewContactModal}>close</Button>,
            <Button key="submit" type="primary" loading={savingNewContact} onClick={this.handleSubmitNewContact}>
              save
            </Button>,
          ]}>
          <ContactForm ref="form"/>
        </Modal>
        <input className='form-control' type='text' placeholder='search by name' style={{float:'right',width:'200px'}} />
      </div>
    )
  }
}

// const mapStateToProps = state => ({})

// const mapDispatchToProps = dispatch => ({})

export default connect(
  null,
  null
)(ContactsOpt)