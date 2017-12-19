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
 */
export function removeContact(contact) {
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
      dispatch(actions.removeContactRequestSuccess(contact))
      //删除成功重新拉取数据
      fetchContacts()(dispatch)
    })
    .catch(error => {
      console.log('remove contact error: %s', error.message)
      dispatch(actions.removeContactRequestFailure(error))
    })
  }
}