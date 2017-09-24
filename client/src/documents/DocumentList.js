import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import EntryList from '../common/EntryList'
import { withQuery } from '../common/utils'

import * as moment from 'moment'

import { DocumentsQuery } from './queries'

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

export default withQuery(DocumentsQuery)(DocumentList)
