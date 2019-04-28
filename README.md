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
subscription for a new block
```
subscription {
  latestBlock {
    number
    blockHash
  }
}
```
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
---------
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
# features
* query blocks
* subscribe latestBlock
* other APIs

# todo
* to implement the rest of RESTful API with graphQL query
