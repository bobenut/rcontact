import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import PropTypes from 'prop-types'
import ContactsChunk from './ContactsChunk';
import { closeContactCUDialog } from '../actions'

class contactCUDialog extends Component {
  // static propTypes = {
  //   contactChunks: PropTypes.object.isRequired,
  //   actions: PropTypes.object.isRequired
  // }

  closeContactCUDialog = () => {
    const { dispatch } = this.props
    dispatch(closeContactCUDialog())
  }

  render() {
    const { isShowContactCUDialog } = this.props
    console.log('********************* %s', isShowContactCUDialog)

    return (
      <div>
        <Modal show={isShowContactCUDialog} onHide={this.closeContactCUDialog} >
          <form>
            <Modal.Header closeButton>
              <Modal.Title>contacts</Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
              <div className='form-horizontal' role='form'>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'>Name</label>
                    <div className='col-sm-7'>
                      <input className='form-control' name='name' type='text' placeholder='Name'/>
                      <div id="nameErrorInfo" className="alert alert-danger" style={{marginTop: "2px"}}>
                        <div>必须输入</div>
                        <div>字符为2-16个</div>
                      </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'>NameFirstWordChr</label>
                    <div className='col-sm-7'>
                      <input className='form-control' name='nameFirstWordChr' type='text' placeholder='NameFirstWordChr'/>
                      <div id="nameFirstWordChrErrorInfo" className="alert alert-danger" style={{marginTop: "2px"}}>
                        <div>必须输入</div>
                        <div>字符为1个</div>
                      </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'>NameAllWordChr</label>
                    <div className='col-sm-7'>
                      <input className='form-control' name='nameAllWordChr' type='text' placeholder='NameAllWordChr'/>
                      <div id="nameAllWordChrErrorInfo" className="alert alert-danger" style={{marginTop: "2px"}}>
                        <div>必须输入</div>
                        <div>字符为1-10个</div>
                      </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'>Corp</label>
                    <div className='col-sm-7'>
                      <input className='form-control' type='text' placeholder='Corp'/>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'>Mobile Phone</label>
                    <div className='col-sm-7'>
                      <input className='form-control' name='mobilePhone' type='text' placeholder='Mobile Phone'/>
                      <div id="mobilePhoneErrorInfo" className="alert alert-danger" style={{marginTop: "2px"}}>
                        <div>必须输入</div>
                        <div>字符为4-20个</div>
                      </div>
                    </div>
                </div>
                <div className='form-group'>
                    <label className='col-sm-4 control-label'> Mail</label>
                    <div className='col-sm-7'>
                      <input className='form-control' name='mail' type='text' placeholder='Mail' />
                      <div id="mailErrorInfo" className="alert alert-danger" style={{marginTop: "2px"}}>
                        <div>必须输入</div>
                        <div>必须是有效的邮件格式</div>
                      </div>
                    </div>
                </div>
              </div>
            </Modal.Body>
            
            <Modal.Footer>
              <button id='btnCancel' className='btn btn-default' type='button' onClick={this.closeContactCUDialog}>Close</button>
              <button id='btnSave' className='btn btn-primary' type="submit">Save</button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  isShowContactCUDialog: state.contactMgr.isShowContactCUDialog
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  null
)(contactCUDialog)