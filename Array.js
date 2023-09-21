const express = require('express');
const _ = require('lodash');

const port = 5000;

const app = express();

app.get("/", (req, res) => {
    const arr = [1, 2, 3, 4, 5, 6];
    //chunk
    const out = _.chunk(arr, 4);
    console.log(out);

    //findIndex
    const pos = _.findIndex(arr, (num) => num == 4);
    console.log(pos, " : ", arr);
    res.send(`Hello : ${out}`);
})

app.listen(port, () => {
    console.log("The server is running");
});