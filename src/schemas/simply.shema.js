const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type Address {
    crossStreet: String!
    state: String!
    country: String!
    postalCode: String!
    streetName: String!
    streetNumberText: String!
    city: String!
    streetNumber: Int!
    full: String!
    unit: String!
  }
  
  scalar JSON

  type Simply {    
    privateRemarks : String!
    address: Address
    property: JSON
  }
   
  type Query {
    simply(q: String): [Simply]
  }
`;

module.exports = {
  typeDefs
}