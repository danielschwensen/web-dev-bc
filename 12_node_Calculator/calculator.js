const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded( { extended: true} ) );

app.get('/', (reg, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.post("/", function(req, res) {
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
})

app.listen(port, () => {
    console.log( `Example app listening at http://localhost:${port}`)
})