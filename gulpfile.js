'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('sass', function () {
  return gulp.src('style.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
  return gulp.src('./src/index.html')
    .pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
    .pipe(gulp.dest('./'));
});
