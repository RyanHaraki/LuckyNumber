let LuckyCoin = artifacts.require("./LuckyCoin.sol");

module.exports = function (deployer) {
  deployer.deploy(LuckyCoin);
};
