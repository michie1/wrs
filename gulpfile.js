const gulp = require('gulp');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const tape = require('gulp-tape');

gulp.task('testbuild', () => {
    return gulp.watch('testtape/src/**/*.js')
       .on('change', (file) => {
          return gulp.src(file)
              .pipe(babel())
              .pipe(gulp.dest((file) => {
                  return file.base.replace('src', 'build');
              }))
       }); 
});

gulp.task('testwatch', () => {
    return gulp.watch('testtape/build/**/*.js')
                      .on('change', (file) => { 
                          return gulp.src(file).pipe(tape());
                      });
});

gulp.task('tdd', gulp.parallel('testbuild', 'testwatch'));
