import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import 'antd/lib/form/style/index.css'
import 'antd/lib/input/style/index.css'
import 'antd/lib/grid/style/index.css'

class ContactForm extends Component {
  static propTypes = {
    contact: PropTypes.object,
  }

  render() {
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };

      const { getFieldDecorator } = this.props.form;

      const contact = this.props.contact || {
        _id: '',
        name: '',
        nameFirstWordChr: '',
        nameAllWordChr: '',
        mobilePhone:'',
        corp: '',
        mail: ''
      }
      
      contact._id = contact._id || ''

      return (
        <Form layout="horizontal">
          <Form.Item
            {...formItemLayout}
            label="_id"
            style={{display: 'none'}}>
            {getFieldDecorator('_id', {
              initialValue: contact._id
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Name">
            {getFieldDecorator('name', {
              initialValue: contact.name,
              rules: [{
                min: 2, message: '字符为2-16个!',
              }, {
                max: 16, message: '字符为2-16个!',
              }, {
                required: true, message: '必须输入!',
              }]
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="NameFirstWordChr">
            {getFieldDecorator('nameFirstWordChr', {
              initialValue: contact.nameFirstWordChr,
              rules: [{
                min: 1, message: '字符为1个!',
              }, {
                max: 1, message: '字符为1个!',
              }, {
                required: true, message: '必须输入!',
              }]
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="NameAllWordChr">
            {getFieldDecorator('nameAllWordChr', {
              initialValue: contact.nameAllWordChr,
              rules: [{
                min: 1, message: '字符为1-10个!',
              }, {
                max: 10, message: '字符为1-10个!',
              }, {
                required: true, message: '必须输入!',
              }]
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Corp">
            {getFieldDecorator('corp', {
              initialValue: contact.corp,
              rules: [],
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Mobile Phone">
            {getFieldDecorator('mobilePhone', {
              initialValue: contact.mobilePhone,
              rules: [{
                min: 4, message: '字符为4-20个!',
              }, {
                max: 20, message: '字符为4-20个!',
              }, {
                required: true, message: '必须输入!',
              }]
            })(
              <Input />
            )}
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="Mail">
            {getFieldDecorator('mail', {
              initialValue: contact.mail,
              rules: [{
                type: 'email', message: '必须是有效的邮件格式!',
              }, {
                required: true, message: '必须输入!',
              }]
            })(
              <Input />
            )}
          </Form.Item>
        </Form>
      )
  }
}

// ContactForm.propTypes = {
//   mod: PropTypes.object.isRequired,
//   contact: PropTypes.object.isRequired,
//   onSubmit: PropTypes.func.isRequired,
// }

export default Form.create()(ContactForm);