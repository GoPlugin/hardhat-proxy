require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config()

module.exports = {
  solidity: "0.8.4",
  networks: {
    apothem: {
      url: process.env.APOTHEM_RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
    mainnet:{
        url: process.env.MAINNET_RPC_URL,
        accounts: [process.env.PRIVATE_KEY],
    },
    fantomtest: {
        url: 'https://rpc.ankr.com/fantom_testnet/',
        accounts: [process.env.PRIVATE_KEY],
    }
  }
};