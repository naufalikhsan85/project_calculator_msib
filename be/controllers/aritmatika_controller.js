const aritmatika = require("../src/aritmatika")

module.exports.perkalian = async (req, res, next) =>{
    try{
        let payload =  req.body
        let result =  aritmatika.perkalian2angka(payload.angka1, payload.angka2)

        res.send(result)

    }
    catch(e){
        console.log('error perkalian: ', e)
        res.status(500).send({
            error: e.toString()
        })
    }
}