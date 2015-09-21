'use strict';

var gulp = require('gulp'),
    postcss  = require('gulp-postcss'),
	  uglify = require('gulp-uglify'),
	  connect = require('gulp-connect-php'),
	  rename = require("gulp-rename"),
	  browserSync = require('browser-sync'),
	  sass = require('gulp-sass'),
	  modernizr = require('gulp-modernizr'),
	  concat = require('gulp-concat'),
	  notify = require("gulp-notify"),
	  watch = require("gulp-watch"),
	  jshint = require('gulp-jshint'),
    less = require('gulp-less'),
    path = require('path'),
    autoprefixer = require('autoprefixer'),
    minifycss = require('gulp-minify-css'),
    stripCssComments = require('gulp-strip-css-comments');

gulp.task('default', function() {
  // place code for your default task here
});

/* Browser Sync */
gulp.task('connect-sync', function() {
  connect.server({}, function (){
    browserSync({
      proxy: 'localhost:8000'
    });
  });
 
  gulp.watch(['**/*.php','dist/css/dist.css','src/js/*.js','src/js/libraries/*.js']).on('change', function () {
    browserSync.reload();
  });
});

/* SASS compiler */
gulp.task('sass', function () {
  /* Compile SASS */
  return gulp.src('src/scss/app.scss')
    .pipe(sass({includePaths: ['bower_components/foundation/scss','node_modules/bourbon-libsass/dist']}))
    .pipe(sass({outputStyle: 'expanded'})) // nested, expanded, compact, compressed
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
	.pipe(notify({ message: 'SASS task complete' }))
});

/* LESS compiler */
gulp.task('less', ['sass'], function () {
  /* Compile LESS */
  return gulp.src('src/less/ui.less')
    .pipe(less({
      paths: ['bower_components/Semantic-UI-LESS']
    }))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'LESS UI task complete' }));
});

/* Concatinate both app and ui */
gulp.task('concat', ['less'], function () { 
 
  /* Concat into dist.css */
  gulp.src(['dist/css/app.css','dist/css/ui.css'])
    .pipe(concat('dist.css'))
    .pipe(stripCssComments({preserve: false}))
    //.pipe(minifycss())
    .on('error', swallowError)
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'CSS distribution task complete' }));
});

/* Modernizr build */
gulp.task('modernizr', function() {
    gulp.src(['dist/css/dist.css','dist/js/*.min.js','!dist/js/custom-modernizr.min.js'])
    .pipe(modernizr('modernizr-custom.min.js'))
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(gulp.dest("dist/js/"))
	.pipe(notify({ message: 'Uglify <%= file.relative %>! complete' }));
});

/* Uglify JS when changed */
gulp.task('uglifyfile', function () {
    gulp.src(['src/js/*.js','src/js/libraries/*.js']) 
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(gulp.dest('dist/js'))
	.pipe(notify({ message: 'Uglify <%= file.relative %>! complete' }));
});

/* Uglify JS on intial Gulp load */
gulp.task('uglify', function() {
     gulp.src([
			  	'src/js/*.js', 
			    'src/js/libraries/*.js', 
			    'bower_components/fastclick/lib/*.js', 
			    'bower_components/jquery-2/dist/jquery.js',
			    'bower_components/jquery-backstretch/jquery.backstretch.js',
          'bower_components/jquery-placeholder/jquery.placeholder.js',
          'bower_components/jquery.cookie/jquery.cookie.js',
          'bower_components/jquery.easing/js/jquery.easing.js',
          'bower_components/jquery.inview/jquery.inview.js',
          'bower_components/jquery.transit/jquery.transit.js',
          'bower_components/lazyloadxt/dist/jquery.lazyloadxt.js',
          'bower_components/lazyloadxt/dist/jquery.lazyloadxt.extra.js',
          'bower_components/scroll-reveal/scrollReveal.js',
          'bower_components/readmore/readmore.js',
          'bower_components/waypoints/lib/jquery.waypoints.js',
          'node_modules/requirejs/require.js',
          'bower_components/foundation/js/foundation.js',  
          'bower_components/foundation/js/foundation/*.js',
          'bower_components/picturefill/src/picturefill.js'])
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .on('error', swallowError)
    .pipe(gulp.dest('dist/js'))
	.pipe(notify({ message: 'Uglify <%= file.relative %>! complete' }));
});

/* Watch SASS, LESS and JS */
gulp.task('watch', function () {
   gulp.watch([
    'src/scss/*.scss',
    'src/less/*.less',
    'bower_components/Semantic-UI-LESS/definitions/**/*.less',
    'bower_components/Semantic-UI-LESS/theme.config'
   ], ['concat','modernizr'])
   gulp.watch(['src/js/*.js','src/js/libraries/*.js'], ['uglifyfile'])
  .on('error', swallowError)
  .pipe(notify({ message: 'Watch JS/SASS/LESS task complete, Reloading Browser' }));
});


gulp.task('default', [ 'connect-sync', 'uglify','less', 'concat', 'modernizr', 'watch']);

function swallowError (error) {

  // If you want details of the error in the console
  console.log(error.toString());

  this.emit('end');
}