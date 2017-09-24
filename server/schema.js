const { buildSchema } = require('graphql')

const schema = buildSchema(`

type Document {
  id: ID!
  title: String
  body: String
}

input DocumentInput {
  title: String
  body: String
}

type Query {
  document(id: ID!): Document
  documents: [Document]!
}

type Mutation {
  createDocument(input: DocumentInput!): Document
  updateDocument(id: ID!, input: DocumentInput!): Document
  deleteDocument(id: ID!): Document
}
`)

let documents = [
  { id: 0, title: 'document A', body: 'some-contents' },
  { id: 1, title: 'document B', body: 'some-contents' },
]

// fuzzy compare because it's tedious to consider string/number ID type
const getDocument = id => documents.find(e => e.id == id)

const rootValue = {

  // Query

  document: ({ id }) => {
    return getDocument(id)
  },
  documents: () => {
    return documents
  },

  // Mutation

  createDocument: ({ input }) => {
    const id = documents.length
    const doc = Object.assign({}, input, { id })
    documents.push(doc)
    return doc
  },
  updateDocument: ({ id, input }) => {
    const doc = getDocument(id)
    Object.assign(doc, input)
    return doc
  },
  deleteDocument: ({ id }) => {
    const doc = getDocument(id)
    documents = documents.filter(e => e.id != id)
    return doc
  }
}

module.exports = {
  schema,
  rootValue,
}
