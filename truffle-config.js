
const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "<your private key>";
const endpointUrl = "<Infura's rinkeby endpoint for your project>"

module.exports = {

  networks: {
    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          //private keys array
          [privateKey],
          //url to ethereum node
          endpointUrl
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4
    }
  },

  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
    }
  },

};
