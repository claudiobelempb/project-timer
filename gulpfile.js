'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

gulp.task('sass', compiler);

function buildStyles() {
  return gulp
    .src('./src/styles/theme/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/styles/theme'));
}

function watch() {
  gulp.watch('./src/styles/theme/**/*.scss', compiler);
}

// exports.buildStyles = buildStyles;
// exports.watch = function () {
//   gulp.watch('./src/styles/theme/**/*.scss', ['sass']);
// };
