const { PubSub } = require('apollo-server-express');
const pubsub = new PubSub(); //create a PubSub instance
const BLOCK_ADDED_TOPIC = 'newChannel';
var axios = require('axios');

const channels = [{
    id: 1,
    name: 'soccer',
  }, {
    id: 2,
    name: 'baseball',
  }];

  let nextId = 3;

  Blocks = require('./blocks')
  // start beating
  function setIntervalAndExecute(fn, t) {
    fn();
    return(setInterval(fn, t));
  }
  var oldid;
  setIntervalAndExecute(
    () => {
       new Blocks("latest").create().then((x) => {
       var newid = x.id
        if (newid !== oldid ) {
          pubsub.publish(BLOCK_ADDED_TOPIC, { newBlock: x });
          oldid = newid;
        }
      })
      .catch(error => {
        console.log(error)
      });
    }
    , 1000); // check every one second

const resolvers = {
    Query: {
        channels: () => {
        return channels;
        },
        channel: (root, { id }) => {
        return channels.find(channel => channel.id == id);
        },
        blocks: (root, { number }) => {
          return new Blocks(number).create()
        },
    },
    Subscription: {
        newBlock: {
          subscribe: () => pubsub.asyncIterator(BLOCK_ADDED_TOPIC)
        }
    }
};

module.exports = resolvers;
