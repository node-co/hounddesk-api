import { MongoClient } from 'mongodb';

// connection uri
const uri = 'mongodb://localhost:27017';

// new MongoClient
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    // connect client to server
    await client.connect();

    // establish and verify connection}
    await client.db('admin').command({ ping: 1 });
    // console.log('Conneted successfully to server');
  } catch (error) {
    // close client on finish/error
    // console.log('Connection error', error);
  }
}

run();
