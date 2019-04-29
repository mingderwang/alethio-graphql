const { PubSub } = require('apollo-server-express')
const pubsub = new PubSub() // create a PubSub instance
const BLOCK_ADDED_TOPIC = 'newBlock'

Blocks = require('./blocks')
Accounts = require('./accounts')
Contracts = require('./contracts')
LogEntries = require('./log-entries')
Transactions = require('./transactions')
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
    },
    accounts: (root, { address }) => {
      return new Accounts(address).create()
    }, 
    contracts: (root, { address }) => {
      return new Contracts(address).create()
    }, 
    log_entries: (root, { id }) => {
      return new LogEntries(id).create()
    }, 
    transactions: (root, { txHash }) => {
      return new Transactions(txHash).create()
    }, 
  },
  Subscription: {
    latestBlock: {
      subscribe: () => pubsub.asyncIterator(BLOCK_ADDED_TOPIC)
    }
  }
}

module.exports = resolvers
