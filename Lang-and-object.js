const express = require('express');
const _ = require('lodash');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    //clone
    const obj = [{ 'a': 1 }, { 'b': 2 }];
    const cpy = _.clone(obj);
    console.log(cpy === obj);
    console.log(_.isEqual(cpy, obj));

    // keys
    const temp = { 'a': 1, 'b': 2 };
    console.log(_.keys(temp));

    //values
    console.log(_.values(temp));

    //findKey
    console.log(_.findKey(temp, (o) => {
        // o > 1;
        console.log(o);
        return o > 0;
    }));

    res.send("This is Home page");
});

app.listen(port, () => console.log("The server is running"));

