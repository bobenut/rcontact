import {} from '../actions'
import { 
  ADD_CONTACT,
  EDIT_CONTACT, 
  FILTER_CONTACT, 
  FETCH_CONTACTS_REQUEST_SUCCESS, 
  FETCH_CONTACTS_REQUEST_FAILURE,
  REMOVE_CONTACT_REQUEST_SUCCESS, 
  REMOVE_CONTACT_REQUEST_FAILURE,
  OPEN_CONTACT_CU_DIALOG_AS_NEW,
  OPEN_CONTACT_CU_DIALOG_AS_EDIT,
  CLOSE_CONTACT_CU_DIALOG
} from '../constants/actionTypes'

// import { addContact, removeContacts, editContact, filterContacts } from '../actions'

const initialState = {
  isShowContactCUDialog: false,
  contactChunks: {
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
}

const reducers = {
  [FETCH_CONTACTS_REQUEST_SUCCESS] (state, action) {
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

    return { ...state, contactChunks }
  },
  [OPEN_CONTACT_CU_DIALOG_AS_NEW] (state, action) {
    return { ...state, isShowContactCUDialog: true }
  },
  [OPEN_CONTACT_CU_DIALOG_AS_EDIT] (state, action) {
    return { ...state, isShowContactCUDialog: true }
  },
  [CLOSE_CONTACT_CU_DIALOG] (state, action) {
    return { ...state, isShowContactCUDialog: false }
  }
}

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST_SUCCESS:
      return reducers[action.type](state, action)
    case OPEN_CONTACT_CU_DIALOG_AS_NEW:
      return reducers[action.type](state, action)
    case CLOSE_CONTACT_CU_DIALOG:
      return reducers[action.type](state, action)
    // case EDIT_CONTACT:
    //   return state.map(contact =>
    //     contact.id === action.id ?
    //       { ...contact } :
    //       contact
    //   )

    // case REMOVE_CONTACTS:
    //   return state

    // case FILTER_CONTACT:
    //   return state

    default:
      return state
  }
}
