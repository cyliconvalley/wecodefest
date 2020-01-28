'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('./src/sass/style.scss')
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(gulp.dest('./'));
});

gulp.task('minify', function() {
	return gulp.src('./src/index.html')
	.pipe(htmlmin({collapseWhitespace: true, minifyJS: true}))
	.pipe(gulp.dest('./'));
});
