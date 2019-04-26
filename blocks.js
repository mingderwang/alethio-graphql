var axios = require('axios')
class Blocks {
  constructor (number) {
    this.number = number
  }
  async create () {
    var result = await getBlock(this.number)
    return result
  }
}
module.exports = Blocks

async function getBlock (number) {
  let result = {
    id: null,
    number: null,
    blockHash: null
  }
  try {
    var instance = axios.create({
      baseURL: 'https://api.ethstats.io/v1/'
    });
    const url = 'blocks/' + number
    await instance.get(url).then(response => {
      result = {
        links: response.data.data.links.self, 
        id:response.data.data.id 
      }
      let a = response.data.data.attributes
      var i = Object.keys(a).length
      for (var j =0; j < i; j++) {
        result[Object.keys(a)[j]] = Object.values(a)[j]
      }
    })
   
  } catch (error) {
    console.error(error)
  }
  return result
}
