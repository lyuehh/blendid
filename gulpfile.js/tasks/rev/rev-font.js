var gulp      = require('gulp')
var path      = require('path')
var rev       = require('gulp-rev')
var revFormat = require('gulp-rev-format');
var revNapkin = require('gulp-rev-napkin')
var debug = require('gulp-debug');

// 4) Rev and compress CSS and JS files (this is done after assets, so that if a
//    referenced asset hash changes, the parent hash will change as well
gulp.task('rev-font', function(){
  var fix = (+Math.random().toString().split('.')[1]).toString(36)

  return gulp.src(path.resolve(process.env.PWD, PATH_CONFIG.dest,  '**/*.{' + TASK_CONFIG.fonts.extensions + '}'))
    .pipe(debug({title: 'font:'}))
    .pipe(rev())
    .pipe(revFormat({
      prefix: '-',
      suffix: '-' + fix,
      lastExt: false
    }))
    .pipe(gulp.dest(PATH_CONFIG.dest))
    .pipe(revNapkin({verbose: false, force: true}))
    .pipe(rev.manifest(path.resolve(process.env.PWD, PATH_CONFIG.dest, 'rev-manifest.json'), {merge: true}))
    .pipe(gulp.dest(''))
})
