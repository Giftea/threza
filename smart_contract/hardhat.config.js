require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten : {
      url: 'https://eth-ropsten.alchemyapi.io/v2/_jNBWyNZ8zlQn4SopEHgW9J-_AU6wfhM',
      accounts: ['cffd28e099106caa45f291aa42880631b0ff7866e672c4eb57b9901ed78c5b02']
    }
  }
}