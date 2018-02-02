const url = require('url');
const elasticsearch = require('elasticsearch');

let config;
if (process.env.ELASTICSEARCH_URL) {
  const params = url.parse(process.env.ELASTICSEARCH_URL);
  config = {
    host: `${params.protocol}//${params.host}`,
    httpAuth: params.auth
  };
}

const client = new elasticsearch.Client(config);

module.exports = client;
