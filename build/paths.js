var appRoot = 'src/';
var outputRoot = 'dist/amd';

var fs = require('fs');
var pkg = JSON.parse(fs.readFileSync('./package.json', 'utf-8'));

module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css', 
  outputRoot: outputRoot,
  typings:outputRoot , 
  output: outputRoot,
  sassSrc: appRoot + 'styles/scss/*.scss',
  sassOutput: appRoot + 'styles/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    './jspm_packages/**/*.d.ts',
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts'
  ],
  packageName: pkg.name  
};
