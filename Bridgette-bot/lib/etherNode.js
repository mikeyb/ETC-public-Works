//* Web3 information *//
var Web3 = require('web3');
//var uri = 'http://10.0.0.108:8545';
//var uri =  'https://mewapi.epool.io:8545';
var uri = 'http://localhost:8545';
module.exports = new Web3(new Web3.providers.HttpProvider(uri));
//* end web3 *//
