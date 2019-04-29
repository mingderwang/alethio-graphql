var instance = require('./axiosInstance')
Contracts = require('./contracts')
ContractMessages = require('./contract-messages')

class Accounts {
  constructor (address) {
    this.address = address
  }

  async create () {
    var result = await getAccount(this.address, true)
    return result
  }
  async createWithoutContractMessages () {
    var result = await getAccount(this.address, false)
    return result
  }
}
async function getAccount (address, withContractMessages) {
  if (address === undefined) {
    return null
  } else {
    let result = {
      id: null,
      address: null,
      balance: null,
      nonce: null,
      links: null
    }
    try {
      await instance.get('accounts/' + address).then(response => {
        result = {
          links: response.data.data.links.self,
          id: response.data.data.id
        }
        let a = response.data.data.attributes
        var i = Object.keys(a).length
        for (var j = 0; j < i; j++) {
          result[Object.keys(a)[j]] = Object.values(a)[j]
        }
        if (withContractMessages) {
        result['contract'] = new Contracts(
          response.data.data.relationships.contract.data.id
        ).create()
          result['contractMessages'] = new ContractMessages(
            address
          ).getContractMessages_by_account()
        }
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }
}

module.exports = Accounts
