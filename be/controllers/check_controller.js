const check = require("../src/check")

module.exports.test_api = async (req, res, next) =>{
    try{
        let result = check.test_api()
        res.send(result)
    }
    catch (e){
        console.log('error test api: ', e)
        
        res.status(500).send({
            error: e.toString()
        })
    }
}

module.exports.hasil2 = async (req, res, next) =>{
    try{
        let result = check.hasil()
        res.send(result)
    }
    catch (e){
        console.log('error hasil: ', e)
        
        res.status(500).send({
            error: e.toString()
        })
    }
}