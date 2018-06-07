const http = require('http');
const port = 3000;

//you can use the above to run your own server if you want, install express for some API action

const RemoteInstance = require('directus-sdk-javascript/remote');

const client = new RemoteInstance({
  url: 'http://directus.properties.local/api/1.1',
  accessToken: '7ElG7N6XM8ygNkljNqRnEEHC57HQ29C8'
});

console.log(client);
console.log('hiiiiii');
client.getItems('properties_1')
  .then(res => console.log(res))
  .catch(err => console.log(err));

