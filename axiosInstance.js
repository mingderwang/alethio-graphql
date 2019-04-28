const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://api.ethstats.io/v1/'
})

module.exports = instance
