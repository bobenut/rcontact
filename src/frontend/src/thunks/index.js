import * as actions from '../actions'
import axios from 'axios'

/**
 * 从后台异步获取所有联系人信息.
 *
 * @param 无.
 */
export function fetchContacts() {
  return dispatch => {
    dispatch(actions.fetchContactsRequest())

    return axios.get('/contact/data')
      .then(response => {
        console.log('getted all contacts success')     
        dispatch(actions.fetchContactsRequestSuccess(response.data))
      })
      .catch(error => {
        console.log('getted all contacts error: %s', error.message)
        dispatch(actions.fetchContactsRequestFailure(error))
      })
  }
}

/**
 * 从后台异步删除联系人信息.
 *
 * @param {object} contact: 联系人对象.
 * @param {function} success: 删除成功.
 * @param {function} failed: 删除失败.
 */
export function removeContact(contact, success, failed) {
  return dispatch => {
    dispatch(actions.removeContactRequest(contact))

    return axios({
      url: '/contact/data',
      method: 'delete',
      data: { contactId: contact._id },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('remove contact success')
      // dispatch(actions.removeContactRequestSuccess(contact))

      success(contact)

      //删除成功重新拉取数据
      fetchContacts()(dispatch)
    })
    .catch(error => {
      console.log('remove contact error: %s', error.message)
      // dispatch(actions.removeContactRequestFailure(error))

      failed(error)
    })
  }
}

/**
 * 向后台提交新增联系人.
 *
 * @param {object} contact: 联系人对象.
 * @param {function} success: 新增成功.
 * @param {function} failed: 新增失败.
 */
export function saveNewContact(contact, success, failed) {
  return dispatch => {

    return axios({
      url: '/contact/data',
      method: 'post',
      data: { contact: contact },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('save new contact success')

      success(contact)
      
      //保存成功重新拉取数据
      fetchContacts()(dispatch)

      
    })
    .catch(error => {
      console.log('save new contact error: %s', error.message)

      failed(error)
    })
  }
}

/**
 * 向后台提交修改过的联系人信息.
 *
 * @param {object} contact: 联系人对象.
 * @param {function} success: 提交修改成功.
 * @param {function} failed: 提交修改失败.
 */
export function saveEdittedContact(contact, success, failed) {
  return dispatch => {

    return axios({
      url: '/contact/data',
      method: 'put',
      data: { contact: contact },
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
    .then(response => {
      console.log('save editted contact success')

      success(contact)
      
      //保存成功重新拉取数据
      fetchContacts()(dispatch)

      
    })
    .catch(error => {
      console.log('save editted contact error: %s', error.message)

      failed(error)
    })
  }
}