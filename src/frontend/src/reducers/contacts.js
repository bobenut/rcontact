import { ADD_CONTACT, EDIT_CONTACT, REMOVE_CONTACTS, FILTER_CONTACT } from '../constants/actionTypes'

const initialState = []

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return [
        ...state
      ]

    case EDIT_CONTACT:
      return state.map(contact =>
        contact.id === action.id ?
          { ...contact } :
          contact
      )

    case REMOVE_CONTACTS:
      return state

    case FILTER_CONTACT:
      return state

    default:
      return state
  }
}