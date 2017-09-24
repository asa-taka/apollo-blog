import React from 'react'
import { graphql, gql } from 'react-apollo'
import { Switch, Route, withRouter } from 'react-router-dom'
import { PageHeader, ButtonToolbar, Button } from 'react-bootstrap'

import { LinkButton } from '../common/bootstrap'
import { withLoading } from '../common/utils'

import DocumentView from './DocumentView'
import UpdateDocumentForm from './UpdateDocumentForm'
import DeleteDocumentButton from './DeleteDocumentButton'

const SingleDocument = withRouter(({ match, id, data }) => {
  const doc = data.document
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={({ match }) => (
        <div className="DocumentView">
          <DocumentView id={id} doc={doc}/>
          <ButtonToolbar>
            <LinkButton to={`${match.url}/edit`}>edit document</LinkButton>
            <DeleteDocumentButton>Delete Document</DeleteDocumentButton>
          </ButtonToolbar>
        </div>
      )}/>

      <Route exact path={`${match.url}/edit`} component={({ match }) => (
        <div className="DocumentEdit">
          <UpdateDocumentForm id={id} formData={doc}>
            <ButtonToolbar>
              <LinkButton to={`${match.url}`}>Cancel</LinkButton>
              <Button type="submit" bsStyle="primary">Submit</Button>
            </ButtonToolbar>
          </UpdateDocumentForm>
        </div>
      )}/>
    </Switch>
  )
})

const QUERY = gql`
  query SingleDocument($id: ID!) {
    document(id: $id) { id title body }
  }
`
const withQuery = graphql(QUERY, {
  options: ({ id }) => ({ variables: { id }})
})

export default withQuery(withLoading(SingleDocument))
