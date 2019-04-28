var axios = require('axios')
var instance = axios.create({
  baseURL: 'https://api.ethstats.io/v1/'
})

class Blocks {
  constructor (number, id, blockHash, label) {
    console.log(number, id, blockHash, label)
    if (number !== undefined && number !== '') this.number = number
    else if (id !== undefined && id !== '') this.number = id
    else if (blockHash !== undefined && blockHash !== '') {
      this.number = blockHash
    } else if (label !== undefined && label !== '') this.number = label
    else this.number = ''
  }
  async create () {
    var result = await getBlock(this.number, true)
    return result
  }
  async createWithoutParent () {
    var result = await getBlock(this.number, false)
    return result
  }
}
module.exports = Blocks

async function getBlock (number, withoutParent) {
  if (number === '') {
    return null
  } else {
    let result = {
      id: null,
      number: null,
      blockHash: null
    }
    try {
      await instance.get('blocks/' + number).then(response => {
        result = {
          links: response.data.data.links.self,
          id: response.data.data.id
        }
        let a = response.data.data.attributes
        var i = Object.keys(a).length
        for (var j = 0; j < i; j++) {
          result[Object.keys(a)[j]] = Object.values(a)[j]
        }
        let parentId = parseInt(response.data.data.attributes.number) - 1
        if (withoutParent && parentId >= 0) {
          result['parentBlock'] = new Blocks(parentId).createWithoutParent()
        }
      })
    } catch (error) {
      console.error(error)
    }
    return result
  }
}
