import React from 'react'
import { gql } from 'react-apollo'
import { Link, withRouter } from 'react-router-dom'

import EntryList from '../common/EntryList'
import { withQuery, decorate } from '../common/utils'

import * as moment from 'moment'
import * as urlJoin from 'url-join'

const TitleField = withRouter(({ entry, match, linkTo }) => {
  return <Link to={linkTo(entry.id)}>{entry.title}</Link>
})

const DATETIME_FORMAT = 'YYYY-MM-DD hh:mm'

const fields = [
  { name: 'title', component: TitleField, isHeading: true },
  { name: 'created', value: e => moment(e.createdAt).format(DATETIME_FORMAT) },
  { name: 'body', value: e => e.body },
]

const DocumentList = ({ data, linkTo }) => {
  const listProps = {
    entries: data.documents,
    fields,
    entryKey: e => e.id,
    fieldProps: { linkTo }
  }
  return <EntryList {...listProps}/>
}

const QUERY = gql`
  query {
    documents { id title body }
  }
`

export default decorate(DocumentList, withQuery(QUERY))
