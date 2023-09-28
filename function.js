const express = require('express');
const _ = require('lodash');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    const fun = (a, b, c) => console.log(a + b + c);
    //curry

    const curried = _.curry(fun);
    // console.log(curried);
    curried(1, 2, 3);
    curried(1)(2)(3);
    curried()(1, 2)(3);

    //debounce

    const debounceFun = _.debounce(() => {
        console.log("debounced after 1000ms")
    }, 1000);

    debounceFun();

    //defer

    _.defer(() => console.log("hello"), 1000, "End of stack");

    //throttle
    let cnt = 0;
    const throttleFun = _.throttle(() => console.log(`Throttle function:${cnt++}`), 2000);
    // throttleFun();

    // setInterval(throttleFun, 1000);

    console.log(_.values());
    res.send("@ HOME");


});

app.listen(port, () => console.log("The server is running..."));
