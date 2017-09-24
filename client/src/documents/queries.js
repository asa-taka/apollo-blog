import { gql } from 'react-apollo'

// Queries

export const DocumentsQuery = gql `
  query Documents {
    documents { id title body }
  }
`

export const DocumentQuery = gql `
  query Document($id: ID!) {
    document(id: $id) { id title body }
  }
`

// Mutations

export const CreateDocumentMutation = gql `
  mutation CreateDocument($input: DocumentInput!) {
    createDocument(input: $input) { id title body }
  }
`

export const UpdateDocumentMutation = gql `
  mutation UpdateDocument($id: ID!, $input: DocumentInput!){
    updateDocument(id: $id, input: $input) { id title body }
  }
`

export const DeleteDocumentMutation = gql `
  mutation DeleteDocument($id: ID!) {
    deleteDocument(id: $id) { id title body }
  }
`
