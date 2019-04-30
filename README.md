# demo
[https://alethio-graphql.now.sh/graphql](https://alethio-graphql.now.sh/graphql)

![Image of demo alethio-graphql](https://paper-attachments.dropbox.com/s_BE0D2934E38FF01EA2CACBC68AC848C1B6275467DBDBBCD0963BB0CECAC7ADF3_1556607030162_+2019-04-30+2.46.37.png)

# build
```
yarn
yarn dev
```
# deploy
```
yarn start
```
# docker run
```
docker-compose up
```
check http://localhost/graphql with your web browser

# graphQL query examples
## blocks
subscription for the latest block
```
subscription {
  latestBlock {
    number
    blockGasUsed
    blockDifficulty
    blockHash
    parentBlock {
      number
      blockHash
    }
  }
}
```
-----------
query block for more information
```
{
  blocks(number: "1") {
    id
    links
    number
    blockHash
    blockGasUsed
    blockGasLimit
    blockDifficulty
    blockCreationTime
    blockBeneficiaryReward
    hasBeneficiaryAlias
  }
}
```
result
```
{
  "data": {
    "blocks": {
      "id": "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6",
      "links": "https://api.ethstats.io/v1/blocks/0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6",
      "number": "1",
      "blockHash": "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6",
      "blockGasUsed": "0",
      "blockGasLimit": "5000",
      "blockDifficulty": "17171480576",
      "blockCreationTime": "1438269988",
      "blockBeneficiaryReward": "5000000000000000000",
      "hasBeneficiaryAlias": "0xgeth/v1.0.0/linux/go1.4.2"
    }
  }
}
```
--------------
query the 123th block
```
{
  blocks(number: "123") {
    number
    blockHash
  }
}
```
result
```
{
  "data": {
    "blocks": {
      "number": "123",
      "blockHash": "0x37cb73b97d28b4c6530c925d669e4b0e07f16e4ff41f45d10d44f4c166d650e5"
    }
  }
}
```
or, query the latest block
```
{
  blocks(number: "latest") {
    number
    blockHash
  }
}
```
result
```
{
  "data": {
    "blocks": {
      "number": "7630390",
      "blockHash": "0x28223c87af5c3e6af4e0a3aec3d29f5614fe4b8e244c48918ee2a63c75a6d7a8"
    }
  }
}
```
-------------
support one previous generation of parentBlock
```
{
  blocks(number: "2") {
    number
    blockHash
    parentBlock {
      number
      blockHash
    }
  }
}
```
result
```
{
  "data": {
    "blocks": {
      "number": "2",
      "blockHash": "0xb495a1d7e6663152ae92708da4843337b958146015a2802f4193a410044698c9",
      "parentBlock": {
        "number": "1",
        "blockHash": "0x88e96d4537bea4d9c05d12549907b32561d3bf31f45aae734cdc119f13406cb6"
      }
    }
  }
}
```
## accounts
query account info
```
{
  accounts(address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52") {
    id
    address
    nonce
    balance
    links
    contract {
      links
    }
    contractMessages {
      cmsgIndex
      includedInBlock {
        blockHash
      }
    }
  }
}

```
result
```
{
  "data": {
    "accounts": {
      "id": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "address": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "nonce": 1,
      "balance": "5522357335000000000",
      "links": "https://api.ethstats.io/v1/accounts/0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "contract": {
        "links": "https://api.ethstats.io/v1/contracts/0xb8c77482e45f1f44de1745f52c74426c631bdd52"
      },
      "contractMessages": [
        {
          "cmsgIndex": 4,
          "includedInBlock": {
            "blockHash": "0x2fcdb6497ce89b1703ea268afba73a02b86e701b2417519a72c7220dbc8fc8d1"
          }
        },
        {
          "cmsgIndex": 2,
          "includedInBlock": {
            "blockHash": "0x2fcdb6497ce89b1703ea268afba73a02b86e701b2417519a72c7220dbc8fc8d1"
          }
        },
        {
          "cmsgIndex": 1,
          "includedInBlock": {
            "blockHash": "0x2fcdb6497ce89b1703ea268afba73a02b86e701b2417519a72c7220dbc8fc8d1"
          }
        },
        {
          "cmsgIndex": 4,
          "includedInBlock": {
            "blockHash": "0xd1a2eb7620e6d97ede7e0109de3d0cd9d0263763a314f2c0b5c11c11bcf229a7"
          }
        },
        {
          "cmsgIndex": 2,
          "includedInBlock": {
            "blockHash": "0xd1a2eb7620e6d97ede7e0109de3d0cd9d0263763a314f2c0b5c11c11bcf229a7"
          }
        },
        {
          "cmsgIndex": 1,
          "includedInBlock": {
            "blockHash": "0xd1a2eb7620e6d97ede7e0109de3d0cd9d0263763a314f2c0b5c11c11bcf229a7"
          }
        },
        {
          "cmsgIndex": 4,
          "includedInBlock": {
            "blockHash": "0x1de82605de90b68e5fafb1890330bcf1093340e0f70278d45b349035a847b855"
          }
        },
        {
          "cmsgIndex": 2,
          "includedInBlock": {
            "blockHash": "0x1de82605de90b68e5fafb1890330bcf1093340e0f70278d45b349035a847b855"
          }
        },
        {
          "cmsgIndex": 1,
          "includedInBlock": {
            "blockHash": "0x1de82605de90b68e5fafb1890330bcf1093340e0f70278d45b349035a847b855"
          }
        },
        {
          "cmsgIndex": 4,
          "includedInBlock": {
            "blockHash": "0x5ca2876cdf1f86bc59e6c56b15e4ff11788dabe9192a25dc37b5b1c3243fbcec"
          }
        }
      ]
    }
  }
}
```
## contracts
query a contract info
```
{
  contracts(address: "0x6690819cb98c1211a8e38790d6cd48316ed518db") {
    id
    address
    balance
    links
    constructorArgs
    createdAtBlock {
      blockHash
      number
      parentBlock {
        blockHash
      }
    }
    createdAtContractMessage {
      id
    }
    createdAtTransaction {
      txHash
    }
    account {
      id
      balance
      contractMessages {
        id
        value
      }
      contract {
        id
      }
    }
  }
}
```
result
```
{
  "data": {
    "contracts": {
      "id": "0x6690819cb98c1211a8e38790d6cd48316ed518db",
      "address": "0x6690819cb98c1211a8e38790d6cd48316ed518db",
      "balance": "0",
      "links": "https://api.ethstats.io/v1/contracts/0x6690819cb98c1211a8e38790d6cd48316ed518db",
      "constructorArgs": [
        "0x00000000000000000000000052ae12abe5d8bd778bd5397f99ca900624cfadd4"
      ],
      "createdAtBlock": {
        "blockHash": "0x0207ea254cfdcf75f029e60535fe37a00520d7dfdde2f29c2603639e50affaa3",
        "number": "7143880",
        "parentBlock": {
          "blockHash": "0x40a2d54169c270f4cbfdfd1de68b8f06e4452c6bfd56043a3048b4ac58549c9b"
        }
      },
      "createdAtContractMessage": null,
      "createdAtTransaction": {
        "txHash": "0x55186bd472f504963ef9debcfa1c0df3de3dae72ca56e3536ca84228f267e6e3"
      },
      "account": {
        "id": "0x6690819cb98c1211a8e38790d6cd48316ed518db",
        "balance": "0",
        "contractMessages": null,
        "contract": null
      }
    }
  }
}
```
## log entry
query log_entries
```
{
  log_entries(
    id: "log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0"
  ) {
    id
    links
    hasLogTopics
    globalRank
    eventDecodedError
    loggedBy {
      id
      address
      balance
    }
    block {
      id
      blockHash
    }
    transaction {
      id
      links
    }
    contractMessage {
      id
      links
      msgGasUsed
      from {
        address
      }
      to {
        address
      }
    }
  }
}
```
result
```
{
  "data": {
    "log_entries": {
      "id": "log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0",
      "links": "https://api.ethstats.io/v1/log-entries/log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0",
      "hasLogTopics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x000000000000000000000000f30cb9e6f48cde5f3df13231d466fd85e2687e7c",
        "0x0000000000000000000000007ff6fd154863bedcbb0fa8e63abc9f1f38eec1fc"
      ],
      "globalRank": [
        "7274862",
        "128",
        "0"
      ],
      "eventDecodedError": "",
      "loggedBy": {
        "id": "0xc9c4d9ec2b44b241361707679d3db0876ac10ca6",
        "address": "0xc9c4d9ec2b44b241361707679d3db0876ac10ca6",
        "balance": "0"
      },
      "block": {
        "id": "0x2901007eea7c9b0c16d3c2c0c1449825687f339b79c655830f8c8891f8cbe1f5",
        "blockHash": "0x2901007eea7c9b0c16d3c2c0c1449825687f339b79c655830f8c8891f8cbe1f5"
      },
      "transaction": {
        "id": "0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef",
        "links": "https://api.ethstats.io/v1/transactions/0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef"
      },
      "contractMessage": {
        "id": "msg:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:1",
        "links": "https://api.ethstats.io/v1/contract-messages/msg:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:1",
        "msgGasUsed": 14802,
        "from": {
          "address": "0xf30cb9e6f48cde5f3df13231d466fd85e2687e7c"
        },
        "to": {
          "address": "0xc9c4d9ec2b44b241361707679d3db0876ac10ca6"
        }
      }
    }
  }
}
```
## transactions
query transaction info
```
{
  transactions(
    txHash: "0x6c9dad29509895be39a20c780b08baa040eca86759f40bc0b255e25b3a8035ce"
  ) {
    id
    links
    txType
    globalRank
    blockCreationTime
    cursor
    fee
    firstSeen
    msgError
    msgGasLimit
    txGasPrice
    txGasUsed
    txHash
    txIndex
    txNonce
    txType
    value
  }
}
```
result
```
{
  "data": {
    "transactions": {
      "id": "0x6c9dad29509895be39a20c780b08baa040eca86759f40bc0b255e25b3a8035ce",
      "links": "https://api.ethstats.io/v1/transactions/0x6c9dad29509895be39a20c780b08baa040eca86759f40bc0b255e25b3a8035ce",
      "txType": "CallTx",
      "globalRank": [
        7656501,
        92,
        0
      ],
      "blockCreationTime": 1556462685,
      "cursor": "0x0074d435005c000010009acd04c3bc8a",
      "fee": "351224000000000",
      "firstSeen": 1556462695,
      "msgError": false,
      "msgGasLimit": "143903",
      "txGasPrice": "8000000000",
      "txGasUsed": 43903,
      "txHash": "0x6c9dad29509895be39a20c780b08baa040eca86759f40bc0b255e25b3a8035ce",
      "txIndex": 41,
      "txNonce": 230,
      "value": 0
    }
  }
}
```
## contract messages
```
{
  contract_messages(
    id: "msg:0xf07e058e0cdd0cae990944f2deb8fc1e29fbb40c70713ea336a99e1ed40a0e2a:24"
  ) {
    id
    links
    blockCreationTime
    cmsgIndex
    cursor
    fee
    msgCallDepth
    msgError
    msgErrorString
    msgGasLimit
    msgGasUsed
    globalRank
    msgType
    txGasPrice
    value
    includedInBlock {
      id
      number
      parentBlock {
        id
        number
      }
    }
    from {
      id
    }
    to {
      id
    }
    originator {
      id
    }
    transaction {
      id
    }
  }
}
```
result
```
{
  "data": {
    "contract_messages": {
      "id": "msg:0xf07e058e0cdd0cae990944f2deb8fc1e29fbb40c70713ea336a99e1ed40a0e2a:24",
      "links": "https://api.ethstats.io/v1/contract-messages/msg:0xf07e058e0cdd0cae990944f2deb8fc1e29fbb40c70713ea336a99e1ed40a0e2a:24",
      "blockCreationTime": 1556511374,
      "cmsgIndex": "24",
      "cursor": "0x0074e282008e00002001683acffdec2b",
      "fee": "2025000000000",
      "msgCallDepth": 3,
      "msgError": false,
      "msgErrorString": "",
      "msgGasLimit": "1323552",
      "msgGasUsed": 675,
      "globalRank": [
        7660162,
        142,
        0
      ],
      "msgType": "CallContractMsg",
      "txGasPrice": "3000000000",
      "value": 0,
      "includedInBlock": {
        "id": "0x683acffdec2b3e7de839adae6a5621b4dbcc629e83916f72561cb6fa603a8c02",
        "number": "7660162",
        "parentBlock": {
          "id": "0x9a975e0c1e365ed540bd67e1b2e6fff21cdbbbf5f41689aacb49980deae95d21",
          "number": "7660161"
        }
      },
      "from": {
        "id": "0x751b934e7496e437503d74d0679a45e49c0b7071"
      },
      "to": {
        "id": "0xb8c77482e45f1f44de1745f52c74426c631bdd52"
      },
      "originator": {
        "id": "0x00a183fdbebce39cc1065b14b1015cea3b40b651"
      },
      "transaction": {
        "id": "0xf07e058e0cdd0cae990944f2deb8fc1e29fbb40c70713ea336a99e1ed40a0e2a"
      }
    }
  }
}
```
# features
* subscribe latestBlock
* query block info
* query account info
* query log entries
* query contract info
* query transaction info
* query contract messages
* dockerized
* support docker-compose

# todo
* fine tune
* debug
