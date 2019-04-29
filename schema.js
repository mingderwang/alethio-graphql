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

    type ContractMessage {
      id: String!
      links: String!
      blockCreationTime: Int!
      cmsgIndex: String!
      cursor: String!
      fee: String!
      msgCallDepth: Int!
      msgGasLimit: String!
      msgError: Boolean!
      globalRank: [Int]!
      msgErrorString: String
      msgGasUsed: Int!
      msgType: String!
      txGasPrice: String!
      value: Int!
      # msgPayload:
      includedInBlock: Block # https://api.aleth.io/v1/contract-messages/{id}/includedInBlock
      from : Account
      to: Account
      originator: Account
      transaction: Transaction
      parentContractMessage: ContractMessage
    }

    type Query {
      blocks(number: String id: String blockHash: String label: String): Block
      accounts(address: String): Account
      contracts(address: String): Contract
      log_entries(id: String): LogEntry
      transactions(txHash: String): Transaction
      contract_messages(id: String): ContractMessage
    }

    type Subscription {
        latestBlock: Block
    }
`

module.exports = typeDefs
