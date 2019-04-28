const { PubSub } = require('apollo-server-express')
const pubsub = new PubSub() // create a PubSub instance
const BLOCK_ADDED_TOPIC = 'newChannel'
var axios = require('axios')

Blocks = require('./blocks')
// start beating
function setIntervalAndExecute (fn, t) {
  fn()
  return setInterval(fn, t)
}
var oldId
setIntervalAndExecute(() => {
  new Blocks('latest')
    .create()
    .then(x => {
      var newId = x.id
      if (newId !== oldId) {
        pubsub.publish(BLOCK_ADDED_TOPIC, { latestBlock: x })
        oldId = newId
      }
    })
    .catch(error => {
      console.log(error)
    })
}, 1000) // check every one second

const resolvers = {
  Query: {
    blocks: (root, { number, id, blockHash, label }) => {
      return new Blocks(number, id, blockHash, label).create()
    }
  },
  Subscription: {
    latestBlock: {
      subscribe: () => pubsub.asyncIterator(BLOCK_ADDED_TOPIC)
    }
  }
}

module.exports = resolvers
