var instance = require('./axiosInstance')

class Transactions {
    constructor (txHash) {
      this.txHash = txHash
    }

    async create () {
      var result = await getTransaction(this.txHash)
      return result
    }
}
async function getTransaction (txHash) {
    if (txHash === undefined) {
      return null
    } else {
      let result = {
        id: null,
        links: null
      }
      try {
        await instance.get('transactions/' + txHash).then(response => {
          result = {
            links: response.data.data.links.self,
            id: response.data.data.id
          }
          let a = response.data.data.attributes
          var i = Object.keys(a).length
          for (var j = 0; j < i; j++) {
            result[Object.keys(a)[j]] = Object.values(a)[j]
          }
        })
      } catch (error) {
        console.error(error)
      }
      return result
    }
}

module.exports = Transactions