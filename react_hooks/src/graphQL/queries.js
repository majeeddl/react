
import {gql} from '@apollo/client'

export const getBooksQuery = gql`
    query{
        books{
            title
        }
    }
`