

import {gql} from "@apollo/client"


export const createBookMutation = gql`

mutation createBook(
    $title:String 
    $author:String
    ){
    createBook(
        title: $title
        author: $author
        ){
            id
        }
}
`