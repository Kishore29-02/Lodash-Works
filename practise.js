const express = require('express');
const _ = require('lodash');

const app = express();
const port = 5000;

const leap = (start, end) => {
    let arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr.filter(num => num % 4 === 0);
}

const unzip = arr => {
    arr = _.flatten(arr);
    let out = [];
    let str = [];
    let num = [];
    let bool = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == 'number') {
            num.push(arr[i]);
        } else if (typeof arr[i] === 'string') {
            str.push(arr[i]);
        } else if (typeof arr[i] === 'boolean') {
            bool.push(arr[i]);
        }
    }
    out.push(num);
    out.push(str);
    out.push(bool);

    return out;
}

const fibo = (num, i, j) => {
    if (num == -2) return;
    console.log(i);
    return fibo(num - 1, j, i + j);
}

const removeAt = (arr, pos) => _.remove(arr, (_, i) => i != pos);
app.get("/", (req, res) => {
    let arr = [1, 4, [6, true], "helon"];
    // let arr2 = arr;
    // console.log(arr2);
    // arr.pop();
    // console.log(arr2 + "-------" + arr);
    // let s = 2000;
    // let e = 2024;
    // console.log(leap(s, e));
    // console.log(removeAt(arr, 2));
    // console.log(undefined === undefined);
    // console.log(unzip(arr));
    const delay = _.debounce(fibo, 3000);
    delay(5, 0, 1);
    let out = [1, 2, ...arr];
    console.log(out);
    res.send("This is my home");
});

app.listen(port, () => console.log("The server is running"));
