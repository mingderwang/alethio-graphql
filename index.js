var express = require('express')
var graphqlHTTP = require('express-graphql')
var { buildSchema } = require('graphql')
const port = '1338'
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Block {
    number: String
    blockHash: String
  }

  type Query {
    blocks(number: String): Block
  }
`)

Blocks = require('./blocks')

// The root provides the top-level API endpoints
var root = {
  blocks: function ({ number, id, blockHash, label }) {
    return new Blocks(number, id, blockHash, label).create()
  }
}

var app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
)
app.listen(port)
console.log(
  'Running a GraphQL API server at http://localhost:' + port + '/graphql'
)
