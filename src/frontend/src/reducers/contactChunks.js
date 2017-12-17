import { handleActions } from 'redux-actions'
import {} from '../actions'
import { 
  ADD_CONTACT,
  EDIT_CONTACT, 
  REMOVE_CONTACTS, 
  FILTER_CONTACT, 
  FETCH_CONTACTS_REQUEST, 
  FETCH_CONTACTS_SUCCESS, 
  FETCH_CONTACTS_FAILURE } from '../constants/actionTypes'
// import { addContact, removeContacts, editContact, filterContacts } from '../actions'

const initialState = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [],
  i: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  o: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  u: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: []
}

const reducers = {
  [FETCH_CONTACTS_SUCCESS] (state, action) {
    var contactChunks = {
      a: [],
      b: [],
      c: [],
      d: [],
      e: [],
      f: [],
      g: [],
      h: [],
      i: [],
      j: [],
      k: [],
      l: [],
      m: [],
      n: [],
      o: [],
      p: [],
      q: [],
      r: [],
      s: [],
      t: [],
      u: [],
      v: [],
      w: [],
      x: [],
      y: [],
      z: []
    }

    for (let i = 0; i < action.contacts.length; i++) {
      let c = action.contacts[i]
      contactChunks[c.nameFirstWordChr].push(c)
    }

    return contactChunks
  }
}

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_SUCCESS:
      return reducers[FETCH_CONTACTS_SUCCESS](state, action)
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
