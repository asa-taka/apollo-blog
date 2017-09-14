import { makeExecutableSchema } from 'graphql-tools';

const typeDefs = `

type Document {
  id: ID!
  title: String!
  body: String!
}

input DocumentInput {
  title: String!
  body: String!
}

type Query {
  getDocument(id: ID!): Document
  getDocuments: [Document]!
}

type Mutation {
  createDocument(input: DocumentInput!): Document
  updateDocument(id: ID!, input: DocumentInput!): Document
  deleteDocument(id: ID!): Document
}
`

let documents = [
  { id: 'doc-a', title: 'document A', body: 'some-contents' },
  { id: 'doc-b', title: 'document B', body: 'some-contents' },
]

const resolvers = {
  Query: {
    getDocument: ({ id }) => {
      return documents.find(e => e.id === id)
    },
    getDocuments: () => {
      return documents
    }
  },
  Mutation: {
    createDocument: (root, { input }) => {
      const doc = Object.assign({}, input, { id: input.title })
      documents.push(doc)
      return doc
    },
    updateDocument: (root, { id, input }) => {
      const doc = resolvers.Query.getDocument({ id })
      Object.assign(doc, input)
      return doc
    },
    deleteDocument: (root, { id }) => {
      const doc = resolvers.Query.getDocument({ id })
      documents = documents.filter(e => e.id !== id)
      return doc
    }
  }
}

export default makeExecutableSchema({ typeDefs, resolvers })
