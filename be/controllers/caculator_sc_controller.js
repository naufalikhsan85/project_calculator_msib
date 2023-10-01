const calculator_sc = require("../src/calculator_sc")

module.exports.hasil_perkalian_sc = async (req, res, next) =>{
    try{
        let result =  await calculator_sc.get_readHasilPerkalian()
        res.send(result)
    }
    catch(e){
        console.log('error perhasil_perkalian_sc: ', e)
        res.status(500).send({
            error: e.toString()
        })
    }
}