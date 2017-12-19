import * as types from '../constants/actionTypes'

export const fetchContactsRequest = () => ({ type: types.FETCH_CONTACTS_REQUEST })
export const fetchContactsRequestSuccess = contacts => ({ type: types.FETCH_CONTACTS_REQUEST_SUCCESS, contacts })
export const fetchContactsRequestFailure= error => ({ type: types.FETCH_CONTACTS_REQUEST_FAILURE, error })

export const removeContactRequest = removingContact => ({ type: types.REMOVE_CONTACT_REQUEST, removingContact })
export const removeContactRequestSuccess = removedContact => ({ type: types.REMOVE_CONTACT_REQUEST_SUCCESS, removedContact })
export const removeContactRequestFailure= error => ({ type: types.REMOVE_CONTACT_REQUEST_FAILURE, error })

export const addContact = text => ({ type: types.ADD_CONTACT, text })
export const editContact = (id, text) => ({ type: types.EDIT_CONTACT, id, text })
export const filterContacts = id => ({ type: types.FILTER_CONTACT, id })
