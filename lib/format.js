'use strict';

function format(analysis) {
  Object.keys(analysis).forEach((key) => {
    console.log([key, ': ', analysis[key]].join(''));
  });
}

module.exports = format;
