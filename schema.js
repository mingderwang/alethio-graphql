const typeDefs = `
    type Channel {
      id: ID              # "!" denotes a required field
      name: String
      messages: [Message]
    }

    type Message {
      id: ID!
      text: String
    }

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

    # This type specifies the entry points into our API.
    type Query {
      channels: [Channel]    # "[]" means this is a list of channels
      channel(id: ID!): Channel
      blocks(number: String!): Block
    }

    type Subscription {
        newBlock: Block    # subscription operation.
    }
`;

module.exports = typeDefs
