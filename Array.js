const express = require('express');
const _ = require('lodash');

const port = 5000;

const app = express();

app.get("/", (req, res) => {
    let arr = [1, 2, 3, 4, 5, 6];
    //chunk
    const out = _.chunk(arr, 4);
    console.log("chunk--", out);

    //findIndex
    const pos = _.findIndex(arr, (num) => num == 4);
    console.log("findIndex--", pos, " : ", arr);

    //flattern
    arr = [1, [2, 3], [4], 5];
    console.log("flattern--", _.flatten(arr));

    //indexOf
    arr = [1, 2, 1, 2];
    console.log("indexOf--", arr, _.indexOf(arr, 2));
    console.log(_.indexOf(arr, 2, 2));

    //join
    arr = ['a', 'b', 'c'];
    console.log("join--", _.join(arr, '-'));

    //slice
    console.log("slice--", _.slice(arr));

    //uniq
    arr = [1, 2, 3, 2, 1];
    console.log("uniq--", _.uniq(arr));

    res.send(`Hello : ${arr}`);
});

app.listen(port, () => {
    console.log("The server is running");
});