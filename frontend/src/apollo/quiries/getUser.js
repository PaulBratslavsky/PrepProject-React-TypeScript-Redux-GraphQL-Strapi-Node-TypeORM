import { gql } from "@apollo/client"

export const GET_USER = gql`
  query GetUser($input:ID!) {	user(id: $input){
    id
    firstName
    lastName
    avatar {
      url
    }
  }
}
`