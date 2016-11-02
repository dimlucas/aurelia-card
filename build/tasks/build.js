var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var merge = require('merge2');
var typescript = require('gulp-typescript');
var debug = require('gulp-debug');
var gulpSass = require('gulp-sass');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;

gulp.task('build-system', function () {
  if (!typescriptCompiler) {
    typescriptCompiler = typescript.createProject('tsconfig.json', {
      "typescript": require('typescript')
    });
  }
  var tsresult = gulp.src([].concat(paths.source, paths.dtsSrc))
    //.pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
    .pipe(changed(paths.output, { extension: '.ts' }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(typescript(typescriptCompiler, '**/*.ts', typescript.reporter.fullReporter(true)));

  return merge([
    tsresult.pipe(sourcemaps.write('.', { includeContent: true }))
      .pipe(gulp.dest(paths.output)),
    tsresult.dts.pipe(gulp.dest(paths.typings))
  ]);
});

gulp.task('build-sass', function(){
  return gulp.src(paths.sassSrc)
              .pipe(gulpSass().on('error', gulpSass.logError))
              .pipe(gulp.dest(paths.sassOutput));
});

gulp.task('copy-module-d-ts', function () {
  return gulp.src(paths.root + '/' + paths.packageName + '.d.ts')
    .pipe(gulp.dest(paths.typings));
});


// copies changed html files to the output directory
gulp.task('build-html', function () {
  return gulp.src(paths.html)
    .pipe(changed(paths.output, { extension: '.html' }))
    .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function () {
  return gulp.src(paths.css)
    .pipe(changed(paths.output, { extension: '.css' }))
    .pipe(gulp.dest(paths.output));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-css', 'build-sass'],'copy-module-d-ts',
    callback
  );
});
