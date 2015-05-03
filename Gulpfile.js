var gulp          = require('gulp');
var path          = require('path');
var rename        = require('gulp-rename');
var browserify    = require('browserify');
var uglify        = require('gulp-uglify');
var riotify       = require('riotify');
var less          = require('gulp-less');
var prefix        = require('gulp-autoprefixer');
var minify        = require('gulp-minify');
var minifyCSS     = require('gulp-minify-css');
var plumber       = require('gulp-plumber');
var livereload    = require('gulp-livereload');
var sourcemaps    = require('gulp-sourcemaps');
var html          = require('html-browserify');
var babelify      = require('babelify');
var uglifyify     = require('uglifyify');
var gutil         = require('gulp-util');
var source        = require('vinyl-source-stream');
var buffer        = require('vinyl-buffer');
var browserifyCss = require('browserify-css');
var base64        = require('gulp-base64');
var changed       = require('gulp-changed');

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./scripts/app/**/*',
              './styles/app/**/*'], ['js']);
});

gulp.task('images', function() {
  return gulp.src('./styles/app/images/**/*')
    .pipe(changed('./public/images'))
    .pipe(gulp.dest('./public/images'));
});

gulp.task('styles', ['images'], function() {
  return gulp.src('./styles/app/default-styles.less')
    .pipe(less())
    .pipe(base64())
    .pipe(prefix({ cascade: true }))
    .pipe(rename('bundle.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('minifyStyles', ['styles'], function() {
  return gulp.src('./build/bundle.css')
    .pipe(minifyCSS())
    .pipe(rename('bundle.min.css'))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('js', function () {
  var b = browserify({
    entries: './scripts/app/main.js',
    debug: true,
    transform: [
                html,
                browserifyCss,
                [riotify],
                [babelify, { 'nonStandard': true, 'stage': 0, 'optional': ['runtime'] }]
                ]
  });
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./build/js/'))
    .pipe(livereload());
});

gulp.task('compress', ['js'], function() {
  gulp.src('./build/js/*.js')
  .pipe(sourcemaps.init())
  .pipe(uglify({
          mangle: true,
          compress: {
            dead_code: true,
            properties: true,
            sequences: true,
            loops: true,
            cascade: true,
            unused: true
          }
        }))
  .pipe(rename('bundle.min.js'))
  .pipe(sourcemaps.write('.'))
  .pipe(gulp.dest('./public/js'))
  .pipe(livereload());
});

gulp.task('build', ['compress']);
gulp.task('default', ['build']);
