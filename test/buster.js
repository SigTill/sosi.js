var config = module.exports;
var fs = require("fs");

config["My tests"] = {
    env: "browser",        // or "node"
    rootPath: "../",
    libs: [
        "lib/*.js"
    ],
    sources: [
        "src/class_system.js",
        "src/util.js",
        "src/head.js",
        "src/geometry.js",
        "src/feature.js",
        "src/parser.js"
    ],
    tests: [
        "test/*-test.js"
    ],
    resources: [
        {path: "/testfile1.sos", content: fs.readFileSync('data/testfile1.sos')},
        {path: "/punkttest.sos", content: fs.readFileSync('data/punkttest.sos')},
        {path: "/kurvetest.sos", content: fs.readFileSync('data/kurvetest.sos')}
    ]

};

