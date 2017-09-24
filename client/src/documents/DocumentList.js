import React from 'react'
import { gql } from 'react-apollo'
import { Link, withRouter } from 'react-router-dom'

import EntryList from '../common/EntryList'
import { withQuery, decorate } from '../common/utils'

import * as moment from 'moment'

const TitleField = withRouter(({ entry, match }) => {
  const to = `${match.url}/${entry.id}`
  return (
    <Link to={to}>{entry.title}</Link>
  )
})

const DATETIME_FORMAT = 'YYYY-MM-DD hh:mm'

const fields = [
  { name: 'title', component: TitleField, isHeading: true },
  { name: 'created', value: e => moment(e.createdAt).format(DATETIME_FORMAT) },
  { name: 'body', value: e => e.body },
]

const DocumentList = props => {
  const docs = props.data.documents
  return (
    <EntryList entries={docs} fields={fields} entryKey={e => e.id}/>
  )
}

const QUERY = gql`
  query {
    documents { id title body }
  }
`

export default decorate(DocumentList, withQuery(QUERY))
