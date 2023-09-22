const express = require('express');
const _ = require('lodash');

const app = express();
const port = 5000;

app.get('/', (req, res) => {
    let obj = {
        'a': 1,
        'b': 2
    };
    let arr = [1, 4, 9];

    //forEach
    console.log("forEach--");
    _.forEach(arr, num => console.log("arr", Math.sqrt(num)));
    _.forEach(obj, o => console.log("obj", o));

    //map
    console.log("map--", _.map(arr, num => Math.sqrt(num)));
    console.log(_.map(obj, o => o * o));

    //reduce
    console.log("reduce--", _.reduce(arr, (a, b) => a + b, 0));
    console.log(_.reduce(obj, (acc, a) => acc + a), 0);

    //some
    arr = [1, 2, 'A'];
    console.log("some--", _.some(arr, Number));
    var users = [
        { 'user': 'barney', 'age': 45, 'active': false },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];
    console.log(_.some(users, { 'age': 40 }));

    //every
    console.log("every--", _.every(arr, Number));
    console.log(_.every(users, { 'user': 'barney', 'active': false }));

    //sortBy
    arr = [1, 5, 2, 8, 3, 4];
    console.log(_.sortBy(arr, (a, b) => b - a));
    console.log(_.sortBy(users, o => o.age));
    res.send("This is home page");
});

app.listen(port, () => {
    console.log("The server is running...");
});