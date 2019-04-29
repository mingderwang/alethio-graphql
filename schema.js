const typeDefs = `
    type Block {
      id: String!
      links: String!
      number: String!
      blockHash: String!
      blockBeneficiaryReward: String
      blockCreationTime: String
      blockDifficulty: String
      blockGasLimit: String
      blockGasUsed: String
      hasBeneficiaryAlias: String
      parentBlock: Block
    }

    type Account {
      id: String!
      links: String!
      address: String! 
      nonce: Int! 
      balance: String!
    }

    type Contract {
      id: String!
      links: String!
      address: String!
      balance: String!
    }

    type LogEntry {
      id: String!
      links: String!
    }

    type Transaction {
      id: String!
      links: String!
    }

    type Query {
      blocks(number: String id: String blockHash: String label: String): Block
      accounts(address: String): Account
      contracts(address: String): Contract
      log_entries(id: String): LogEntry
      transactions(txHash: String): Transaction
    }

    type Subscription {
        latestBlock: Block
    }
`

module.exports = typeDefs
