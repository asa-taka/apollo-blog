import { Component, OnInit } from '@angular/core'
import { Apollo } from 'apollo-angular'
import gql from 'graphql-tag'

const DocumentsQuery = gql`
  query Documents {
    documents { id title body }
  }
`;

interface QueryResponse {
  documents: any[]
  loading: boolean
}

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  documents: any[];
  loading: boolean;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<QueryResponse>({
      query: DocumentsQuery
    }).subscribe(({ data }) => {
      this.loading = data.loading
      this.documents = data.documents
    })
  }

}
