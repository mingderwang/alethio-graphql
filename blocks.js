var axios = require('axios')
class Blocks {
    constructor(number) {
        this.number = number
    }
    async create() {
        var result = await getBlock(this.number)
        return result
    }
}
module.exports = Blocks;

async function getBlock(number) {
    let result = {
        number: null,
        blockHash: null
    }
    try {
        const response = await axios.get('https://api.ethstats.io/v1/blocks/'+number);
        result = {
            number: response.data.data.attributes.number,
            blockHash: response.data.data.attributes.blockHash
        }
    } catch (error) {
        console.error(error)
    }
    return result 
}