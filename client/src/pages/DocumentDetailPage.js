import React from 'react'
import CreateDocument from '../components/documents/CreateDocument'
import ListDocument from '../components/documents/ListDocument'
import UpdateDocument from '../components/documents/UpdateDocument'

export default props => {

  const id = props.match.params.id

  return (
    <div>
      <h1>{id}</h1>
      <CreateDocument/>
      <UpdateDocument id={id}/>
      <ListDocument/>
    </div>
  )
}
