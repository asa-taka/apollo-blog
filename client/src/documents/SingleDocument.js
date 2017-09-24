import React from 'react'
import { graphql, gql } from 'react-apollo'
import { Switch, Route, withRouter } from 'react-router-dom'
import { ButtonToolbar, Button } from 'react-bootstrap'

import { LinkButton } from '../common/bootstrap'
import { withLoading } from '../common/utils'

import DocumentView from './DocumentView'
import UpdateDocumentForm from './UpdateDocumentForm'
import DeleteDocumentButton from './DeleteDocumentButton'

import * as Document from './models/Document'

const SingleDocument = withRouter(({ match, id, data }) => {
  const doc = data.document
  return (
    <Switch>
      <Route exact path={`${match.url}`} component={({ match }) => (
        <div className="DocumentView">
          <DocumentView {...doc}/>
          <ButtonToolbar>
            <LinkButton to={`${match.url}/edit`}>edit document</LinkButton>
            <DeleteDocumentButton id={id}>Delete Document</DeleteDocumentButton>
          </ButtonToolbar>
        </div>
      )}/>

      <Route exact path={`${match.url}/edit`} component={({ match }) => (
        <div className="DocumentEdit">
          <UpdateDocumentForm id={id} formData={Document.typeToInput(doc)}>
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
