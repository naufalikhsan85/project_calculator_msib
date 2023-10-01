const check = require('./check_route')
const aritmatika = require('./aritmatika_route')
const calculator_sc = require('./calculator_sc_route')

module.exports = function (app) {
    app.use('/check', check);
    app.use('/aritmatika', aritmatika);
    app.use('/calculator_sc', calculator_sc);
}