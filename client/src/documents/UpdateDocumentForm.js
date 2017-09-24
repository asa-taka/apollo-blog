import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'

import * as Document from './models/Document'
import { funcfy } from '../common/utils'

import { UpdateDocumentMutation, DocumentsQuery } from './queries'

const withMutation = graphql(UpdateDocumentMutation, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: async input => {
      const { id, history, routeOnSucceed } = ownProps
      const options = {
        variables: { id, input },
        refetchQueries: [{ query: DocumentsQuery }]
      }
      const { data } = await mutate(options).catch(console.error)
      console.log(data)
      if (routeOnSucceed) history.push(funcfy(routeOnSucceed)(id))
    }
  })
})

export default withRouter(withMutation(Document.Form))
