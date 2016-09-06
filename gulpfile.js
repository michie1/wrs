const gulp = require('gulp');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const tape = require('gulp-tape');

gulp.task('testbuild', () => {
    return gulp.watch('testtape/src/**/*.js')
       .on('change', (file) => {
          return gulp.src(file)
              .pipe(newer(file.replace('src', 'build'))) // testing a file will result in a change, and newer prevents it.
              .pipe(babel())
              .pipe(gulp.dest((file) => {
                  gutil.log('src -> build', file.base.replace('src', 'build'));
                  return file.base.replace('src', 'build');
              }))
       }); 
});

gulp.task('testwatch', () => {
    return gulp.watch('testtape/build/**/*.js')
                      .on('change', (file) => { 
                          gutil.log('test', file);
                          return gulp.src(file).pipe(tape());
                      });
});

gulp.task('tdd', gulp.parallel('testbuild', 'testwatch'));
