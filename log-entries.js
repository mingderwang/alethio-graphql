var instance = require('./axiosInstance')

class LogEntries {
    constructor (id) {
      this.id = id
    }

    async create () {
      var result = await getLogEntry(this.id)
      return result
    }
}
async function getLogEntry (id) {
    if (id === undefined) {
      return null
    } else {
      let result = {
        id: null,
        links: null
      }
      try {
        await instance.get('log-entries/' + id).then(response => {
          result = {
            links: response.data.data.links.self,
            id: response.data.data.id
          }
          let a = response.data.data.attributes
          var i = Object.keys(a).length
          for (var j = 0; j < i; j++) {
            if (Object.keys(a)[j] === 'hasLogTopics') {
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
        })
      } catch (error) {
        console.error(error)
      }
      return result
    }
}

module.exports = LogEntries