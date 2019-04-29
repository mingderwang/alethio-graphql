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
      contract: Contract
      contractMessages: [ContractMessage]
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
      hasLogTopics: [String]!
      globalRank: [String]!
      eventDecodedError: String
      # eventDecoded
      loggedBy: Contract
      block: Block
      transaction: Transaction
      contractMessage: ContractMessage
    }

    type Transaction {
      id: String!
      links: String!
      txType: String!
      globalRank: [Int]!
      blockCreationTime: Int!
      cursor: String!
      fee: String!
      firstSeen: Int!
      msgError: Boolean!
      # msgErrorString:
      msgGasLimit: String!
      # msgPayload
      txGasPrice: String!
      txGasUsed: Int!
      txHash: String!
      txIndex: Int!
      txNonce: Int!
      value: String!
    }

    type ContractMessage {
      id: String!
      links: String!
      blockCreationTime: Int!
      cmsgIndex: Int!
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
      value: String!
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
