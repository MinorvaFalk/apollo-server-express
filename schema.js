const { gql } = require('apollo-server')

const typeDefs = gql`
    type Query {
        example: String!
    }
`

module.exports = typeDefs