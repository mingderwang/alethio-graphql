var instance = require('./axiosInstance')

class Accounts {
    constructor (address) {
      this.address = address
    }

    async create () {
      var result = await getAccount(this.address)
      return result
    }
}
async function getAccount (address) {
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
        })
      } catch (error) {
        console.error(error)
      }
      return result
    }
}

module.exports = Accounts