import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'
import { PageHeader, ButtonToolbar, Button } from 'react-bootstrap'

import { LinkButton } from '../common/bootstrap'

import DocumentList from './DocumentList'
import CreateDocumentForm from './CreateDocumentForm'
import SingleDocument from './SingleDocument'

export default withRouter(({ match }) => {

  const base = (path = '/') => `${match.path}${path}` // provide module base

  return (
    <Switch>
      <Route exact path={base()} component={({ match }) => (
        <div className="DocumentIndex">
          <PageHeader>Document List</PageHeader>
          <DocumentList/>
          <ButtonToolbar>
            <LinkButton to={base('/new-doc')}>create document</LinkButton>
          </ButtonToolbar>
        </div>
      )}/>

      <Route exact path={base('/new-doc')} component={({ match }) => (
        <div className="DocumentIndex">
          <PageHeader>New Document</PageHeader>
          <CreateDocumentForm>
            <ButtonToolbar>
              <LinkButton to={base()}>Cancel</LinkButton>
              <Button type="submit" bsStyle="primary">Submit</Button>
            </ButtonToolbar>
          </CreateDocumentForm>
        </div>
      )}/>

      <Route path={`${match.path}/:id`} component={({ match }) => (
        <SingleDocument id={match.params.id}/>
      )}/>
    </Switch>
  )
})
