# demo
[https://alethio-graphql.now.sh/graphql](https://alethio-graphql.now.sh/graphql)

# build
```
yarn
yarn dev
```
# deploy
```
yarn start
```
# graphQL query examples
## blocks
subscription for the latest block
```
subscription {
  latestBlock {
    number
    blockHash
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
  accounts (address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52") {
    id
    address
    nonce
    balance
    links
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
      "balance": "5520533765000000000",
      "links": "https://api.ethstats.io/v1/accounts/0xb8c77482e45f1f44de1745f52c74426c631bdd52"
    }
  }
}
```
## contracts
query a contract info
```
{
  contracts (address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52") {
    id
    address
    balance
    links
  }
}
```
result
```
{
  "data": {
    "contracts": {
      "id": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "address": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
      "balance": "5520533765000000000",
      "links": "https://api.ethstats.io/v1/contracts/0xb8c77482e45f1f44de1745f52c74426c631bdd52"
    }
  }
}
```
## log entry
query log_entries
```
{
  log_entries (id: "log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0") {
    id
    links
  }
}
```
result
```
{
  "data": {
    "log_entries": {
      "id": "log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0",
      "links": "https://api.ethstats.io/v1/log-entries/log:0xd70ae3e306514044032fce92bd36a36b90aede20bb119b32672287d28debf5ef:0"
    }
  }
}
```
# features
* query block info
* subscribe latestBlock
* query account info
* query log entries
* query contract info

# todo
* to add more info for log entries
* to add account contract, contractMessage and transaction info
* to add more contract fields
* query transation info
* query contract messages
* to implement the rest of RESTful APIs with graphQL queries
