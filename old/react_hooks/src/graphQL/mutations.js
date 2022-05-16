import { gql } from "@apollo/client";

export const createBookMutation = gql`
  mutation CreateBook($book: CreateBookInput!) {
    createBook(book: $book) {
      title
      author
    }
  }
`;
