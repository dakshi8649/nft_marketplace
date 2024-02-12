//https://eth-sepolia.g.alchemy.com/v2/n4B9EGAa8eiKKsURPaM3kUh8CbAXx-cd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/n4B9EGAa8eiKKsURPaM3kUh8CbAXx-cd',
      accounts: ['1028f5f08befea05f5512ca36538dfa5f02c17f98e955190edb269c7ec7f2e6c'],
    },
  },
};