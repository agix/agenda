const { MongoMemoryServer } = require("mongodb-memory-server");
const debug = require("debug")("agenda:test:mongo-server");

let connectionString;

let mongoServer;
beforeEach(async () => {
  debug("beforeEach START");
  mongoServer = new MongoMemoryServer({});
  connectionString = await mongoServer.getConnectionString();
  debug('beforeEach END URI: "%s"', connectionString);
});

afterEach(async () => {
  debug("afterEach START");
  await mongoServer.stop();
  debug("afterEach END");
});

exports.getConnectionString = async () => connectionString;
