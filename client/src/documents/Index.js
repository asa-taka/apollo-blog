import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { PageHeader, ButtonToolbar, Button } from 'react-bootstrap'

import { LinkButton } from '../common/bootstrap'

import DocumentList from './DocumentList'
import CreateDocumentForm from './CreateDocumentForm'
import SingleDocument from './SingleDocument'

import * as urlJoin from 'url-join'

export default withRouter(({ match }) => {

  const rel = path => urlJoin(match.url, path) // relative path

  return (
    <Switch>
      <Route exact path={rel`/`} component={({ match }) => (
        <div className="DocumentIndex">
          <PageHeader>Document List</PageHeader>
          <DocumentList linkTo={id => rel(`${id}`)}/>
          <ButtonToolbar>
            <LinkButton to={rel`/new-doc`}>create document</LinkButton>
          </ButtonToolbar>
        </div>
      )}/>

      <Route exact path={rel`/new-doc`} component={({ match }) => (
        <div className="DocumentIndex">
          <PageHeader>New Document</PageHeader>
          <CreateDocumentForm routeOnSucceed={id => rel(id)}>
            <ButtonToolbar>
              <LinkButton to={rel`/`}>Cancel</LinkButton>
              <Button type="submit" bsStyle="primary">Submit</Button>
            </ButtonToolbar>
          </CreateDocumentForm>
        </div>
      )}/>

      <Route path={rel`/:id`} component={({ match }) => (
        <SingleDocument id={match.params.id}/>
      )}/>
    </Switch>
  )
})
