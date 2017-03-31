let fileIO = require('./fileIO');

module.exports = function (app) {

    app.get('/getData', function (req, res) {
        fileIO.read(function (data) {
            console.log(data);
            res.send(data);
        })
    })

    app.post('/postData', function (req, res) {
        console.log(req.body)
        fileIO.post(req.body, function (data) {
            res.send(data);
        });
    })
}