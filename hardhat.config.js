require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
require("@nomiclabs/hardhat-ethers");

const { privateKey } = require("./private.json");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.7.3",
  
  networks: {
    dev: {
      url: "http://127.0.0.1:8558",
      chainId: 1337,
      accounts: [privateKey]
    },
    plasm: {
      url: "http://47.243.112.217:9933",
      chainId: 80,
      accounts: [privateKey]
    }
  }
};

