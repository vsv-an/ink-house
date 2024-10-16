const { src, dest } = require('gulp');

// Config
const path = require('../config/path.js');
const app = require('../config/app.js');

// Plugins
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
const webpack = require('webpack-stream');


// Обработка JS
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(plumber({
      errorHandler: notify.onError(error => ({
        title: "JS",
        message: error.message
      }))
    }))
    .pipe(babel())
    .pipe(webpack('./../../webpack.config.js'))
    // .pipe(uglify())
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
  }

  module.exports = js;