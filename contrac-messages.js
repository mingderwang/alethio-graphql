var instance = require('./axiosInstance')
Blocks = require('./blocks')
Accounts = require('./accounts')
Transactions = require('./transactions')

class ContractMessages {
  constructor (id) {
    this.id = id
  }

  async create () {
    var result = await getContractMessage(this.id)
    return result
  }
}
async function getContractMessage (id) {
  if (id === undefined) {
    return null
  } else {
    let result = {
      id: null,
      links: null
    }
    try {
      await instance.get('contract-messages/' + id).then(response => {
        result = {
          links: response.data.data.links.self,
          id: response.data.data.id
        }
        let a = response.data.data.attributes
        var i = Object.keys(a).length
        for (var j = 0; j < i; j++) {
          if (Object.keys(a)[j] === 'globalRank') {
            var rankArray = []
            let b = Object.values(a)[j]
            var x = Object.keys(b).length
            for (var y = 0; y < x; y++) {
              rankArray.push(Object.values(y))
            }
            result[Object.keys(a)[j]] = rankArray
          }
          result[Object.keys(a)[j]] = Object.values(a)[j]
        }
        result['includedInBlock'] = new Blocks(
          response.data.data.relationships.includedInBlock.data.id
        ).create()
        result['from'] = new Accounts(
          response.data.data.relationships.from.data.id
        ).create()
        result['to'] = new Accounts(
          response.data.data.relationships.to.data.id
        ).create()
        result['originator'] = new Accounts(
          response.data.data.relationships.originator.data.id
        ).create()
        result['transaction'] = new Transactions(
          response.data.data.relationships.transaction.data.id
        ).create()
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }
}

module.exports = ContractMessages
