# blocks query examples
subscription for a new block
```
subscription {
  newBlock {
    number
    blockHash
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
# features
* query blocks
* subscribe getNewBlock

# todo
* to impletement subscription for getNewBlock in graphQL
