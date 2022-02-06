require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/lp-MNZ3mYn1RCc1Ym61ywKBzDroy7IEk',
      accounts: ['8e42b36cfbb3f03a375719465b9a187ad1e10d0b8df02bcf4ee93af90634418c'],
    },
  },
};