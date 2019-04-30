var instance = require('./axiosInstance')
Accounts = require('./accounts')
Blocks = require('./blocks')
Transactions = require('./transactions')
ContractMssages = require('./contract-messages')

class Contracts {
  constructor (address) {
    this.address = address
  }

  async create () {
    if (this.address === undefined) {
      return null
    }
    var result = await getContract(this.address)
    return result
  }
}
async function getContract (address) {
  if (address === undefined) {
    return null
  } else {
    let result = {
      id: null,
      address: null,
      balance: null,
      links: null
    }
    try {
      await instance.get('contracts/' + address).then(response => {
        result = {
          links: response.data.data.links.self,
          id: response.data.data.id
        }
        let a = response.data.data.attributes
        var i = Object.keys(a).length
        for (var j = 0; j < i; j++) {
          if (Object.keys(a)[j] in ['constructorArgs']) {
            var rankArray = []
            let b = Object.values(a)[j]
            var x = Object.keys(b).length
            for (var y = 0; y < x; y++) {
              rankArray.push(Object.values(y))
            }
            result[Object.keys(a)[j]] = rankArray
          } else {
            result[Object.keys(a)[j]] = Object.values(a)[j]
          }
        }
        result['account'] = new Accounts(
          response.data.data.relationships.account.data.id
        ).createWithoutContractMessages()
        result['createdAtBlock'] = new Blocks(
          response.data.data.relationships.createdAtBlock.data.id
        ).create()
        result['createdAtTransaction'] = new Transactions(
          response.data.data.relationships.createdAtTransaction.data.id
        ).create() 
        result['createdAtContractMessage'] = new ContractMessages(
          response.data.data.relationships.createdAtContractMessage.data.id
        ).create() 
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }
}

module.exports = Contracts
