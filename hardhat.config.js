require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

module.exports = {
  solidity: "0.6.2",
  networks: {
    hardhat: {
      forking: {
        url: process.env.ALCHEMY_KEY,
        blockNumber: 12690088
      }
    },
    ropsten: {
      url: process.env.INFURA_KEY_ROPSTEN,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

