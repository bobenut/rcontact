import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContactsChunk from './ContactsChunk';

export default class ContactsList extends Component {
  static propTypes = {
    contactChunks: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  }

  render() {
    const { contactChunks, actions } = this.props
    return (
      <div className="panel-body">  
        <div style={{float: 'left',width:'100%'}}>
          {Object.keys(contactChunks || {}).map(letter => {
              return <ContactsChunk contactsChunkName={letter} contacts={contactChunks[letter]} actions={actions}/>
            }
          )}
        </div>
      </div>
    )
  }
}