const abi_json = require('../abi.json')
const abi_calculator = abi_json.calculator
const rpc = process.env.RPC;
const Web3 = require('web3');

async function get_readHasilPerkalian(){
    let web3main = new Web3(rpc)
    let loadContract = new web3main.eth.Contract(abi_calculator.abi, abi_calculator.contract_address);
    let result = await loadContract.methods.readHasilPerkalian().call()
    result = Number(result)

    return {
        msg: "hasil perkalian di sc",
        result: result
    }
}

module.exports = {
    get_readHasilPerkalian
}