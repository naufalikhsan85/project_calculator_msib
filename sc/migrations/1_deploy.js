const Calculator = artifacts.require("Calculator");

module.exports = async function (deployer) {
    await deployer.deploy(
        Calculator
    );

    const calculator = await Calculator.deployed()
    console.log("calculator :", calculator.address)
}