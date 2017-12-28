import * as types from '../constants/actionTypes'

export const fetchContactsRequest = () => ({ type: types.FETCH_CONTACTS_REQUEST })
export const fetchContactsRequestSuccess = contacts => ({ type: types.FETCH_CONTACTS_REQUEST_SUCCESS, contacts })
export const fetchContactsRequestFailure= error => ({ type: types.FETCH_CONTACTS_REQUEST_FAILURE, error })

export const removeContactRequest = removingContact => ({ type: types.REMOVE_CONTACT_REQUEST, removingContact })
export const removeContactRequestSuccess = removedContact => ({ type: types.REMOVE_CONTACT_REQUEST_SUCCESS, removedContact })
export const removeContactRequestFailure= error => ({ type: types.REMOVE_CONTACT_REQUEST_FAILURE, error })

export const saveNewContactRequest = newContact => ({ type: types.SAVE_NEW_CONTACT_REQUEST, newContact })
export const saveNewContactRequestSuccess = newContact => ({ type: types.SAVE_NEW_CONTACT_REQUEST_SUCCESS, newContact })
export const saveNewContactRequestFailure= error => ({ type: types.SAVE_NEW_CONTACT_REQUEST_FAILURE, error })

// export const openContactCUDialogAsNew = () => ({ type: types.OPEN_CONTACT_CU_DIALOG_AS_NEW })
// export const openContactCUDialogAsEdit = contact => ({ type: types.OPEN_CONTACT_CU_DIALOG_AS_EDIT, contact })
// export const closeContactCUDialog = () => ({ type: types.CLOSE_CONTACT_CU_DIALOG })

// export const editContact = (id, text) => ({ type: types.OPEN_CONTACT_CU_DIALOG, id, text })
// export const filterContacts = id => ({ type: types.FILTER_CONTACT, id })
