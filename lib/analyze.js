'use strict';
const sass = require('node-sass');
const Parker = require('parker/lib/Parker');
const metrics = require('parker/metrics/All');
const fs = require('fs');
const path = require('path');

function analyze(file, cb) {
  const parker = new Parker(metrics);

  sass.render({ file }, (err, result) => {
    let analysis = parker.run(result.css.toString());
    cb(err, analysis);
  });
}

module.exports = analyze;
