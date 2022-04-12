import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query getBooks {
    books {
      title
      # author
    }
  }
`;
