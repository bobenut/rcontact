import {} from '../actions'
import { 
  FETCH_CONTACTS_REQUEST_SUCCESS,
  FILTER_CONTACTS
} from '../constants/actionTypes'

// import { addContact, removeContacts, editContact, filterContacts } from '../actions'

const initialState = {
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
  },
  filteredContactChunks: {}
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

    return { ...state, contactChunks, filteredContactChunks: contactChunks }
  },
  [FILTER_CONTACTS] (state, action) {
    let filteredContactChunks = {}
    const searchCondition = action.name
    if(!searchCondition || searchCondition == '') {
      return { ...state, filteredContactChunks: state.contactChunks }
    }

    for (let chunckName in state.contactChunks) {
      filteredContactChunks[chunckName] = 
        state.contactChunks[chunckName].filter(contact => contact.name.search(new RegExp(searchCondition, 'i')) >=0 ) || []
    }

    return { ...state, filteredContactChunks }
  }
}

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACTS_REQUEST_SUCCESS:
    case FILTER_CONTACTS:
      return reducers[action.type](state, action)
    default:
      return state
  }
}
