/**
 * @license
 * Copyright (c) 2016 The GDG Spain Authors. All rights reserved.
 * This code may only be used under the MIT style license found at http://gdg.es/LICENSE.txt
 */

'use strict';

const imagemin = require('gulp-imagemin');

// Returns a WriteableStream to process images
function minify() {
  return imagemin({
    progressive: true,
    interlaced: true
  });
}

module.exports = {
  minify: minify
};
