import * as types from '../constants/actionTypes'

export const addContact = text => ({ type: types.ADD_CONTACT, text })
export const removeContacts = ids => ({ type: types.REMOVE_CONTACTS, ids })
export const editContact = (id, text) => ({ type: types.EDIT_CONTACT, id, text })
export const filterContacts = id => ({ type: types.FILTER_CONTACT, id })
