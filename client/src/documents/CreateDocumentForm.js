import { withRouter } from 'react-router-dom'
import { graphql } from 'react-apollo'

import * as Document from './models/Document'
import { funcfy } from '../common/utils'
import { CreateDocumentMutation, DocumentsQuery } from './queries'

const withMutation = graphql(CreateDocumentMutation, {
  props: ({ mutate, ownProps }) => ({
    onSubmit: async input => {
      const options = {
        variables: { input },
        refetchQueries: [{ query: DocumentsQuery }]
      }
      const { data } = await mutate(options).catch(console.error)
      console.log(data)
      const id = data.createDocument.id
      const { routeOnSucceed, history } = ownProps
      if (routeOnSucceed) history.push(funcfy(routeOnSucceed)(id))
    }
  })
})

export default withRouter(withMutation(Document.Form))
