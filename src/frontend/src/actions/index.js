import axios from 'axios'
// import { createActions } from 'redux-actions'
import * as types from '../constants/actionTypes'

export const fetchContactsRequest = () => ({ type: types.FETCH_CONTACTS_REQUEST })
export const fetchContactsSuccess = contacts => ({ type: types.FETCH_CONTACTS_SUCCESS, contacts })
export const fetchContactsFailure= error => ({ type: types.FETCH_CONTACTS_FAILURE, error })
export const addContact = text => ({ type: types.ADD_CONTACT, text })
export const removeContacts = ids => ({ type: types.REMOVE_CONTACTS, ids })
export const editContact = (id, text) => ({ type: types.EDIT_CONTACT, id, text })
export const filterContacts = id => ({ type: types.FILTER_CONTACT, id })

const simulateGetContacts = () => {
  return new Promise(function(resolve, reject) {
    resolve({
        data: [
          {
            "_id" : "3",
            "corp" : "earth",
            "mail" : "ls@shgbit.com",
            "mobilePhone" : "2929",
            "name" : "刘三",
            "nameAllWordChr" : "ls",
            "nameFirstWordChr" : "l"
          },
          {
            "_id" : "1",
            "corp" : "moon",
            "mail" : "zh@shgbit.com",
            "mobilePhone" : "9090",
            "name" : "张汗",
            "nameAllWordChr" : "zh",
            "nameFirstWordChr" : "z"
          },
          {
            "_id" : "2",
            "corp" : "moon",
            "mail" : "zhj@shgbit.com",
            "mobilePhone" : "5757",
            "name" : "周合杰",
            "nameAllWordChr" : "zhj",
            "nameFirstWordChr" : "z"
          }
        ]
      })
    })
}

export function fetchContacts() {
  return dispatch => {
    dispatch(fetchContactsRequest())

    // return axios.get('/contact/data')
    return simulateGetContacts()
      .then(response => {
        console.log('getted all contacts success')
        console.log(response.data)
        
        dispatch(fetchContactsSuccess(response.data))
      })
      .catch(error => {
        console.log('getted all contacts error: %s', error.message)
        dispatch(fetchContactsFailure(error))
      })
  }
}
