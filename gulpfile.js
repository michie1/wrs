const gulp = require('gulp');
const newer = require('gulp-newer');
const babel = require('gulp-babel');
const gutil = require('gulp-util');
const tape = require('gulp-tape');
const faucet = require('faucet');
const plumber = require('gulp-plumber');

gulp.task('buildtest', () => {
    return gulp.watch('testtape/src/**/*.js')
       .on('change', (file) => {
          return gulp.src(file)
              .pipe(plumber())
              .pipe(newer(file.replace('src', 'build'))) // testing a file will result in a change, and newer prevents it.
              .pipe(babel())
              .pipe(gulp.dest((file) => {
                  gutil.log('watch test source and build test', file.base.replace('src', 'build'));
                  return file.base.replace('src', 'build');
              }))
       }); 
}):

gulp.task('testwatchtest', () => {
    return gulp.watch(['testtape/build/**/*.js'])
        .on('change', (file) => { 
            gutil.log('watch test build and test', file);
            return gulp.src(file)
                .pipe(plumber())
                .pipe(tape({
                    reporter: faucet()
                }));
        });
});

gulp.task('buildsource', () => {
    return gulp.watch('src/**/*.js')
       .on('change', (file) => {
          return gulp.src(file)
              .pipe(plumber())
              .pipe(newer(file.replace('src', 'build'))) // testing a file will result in a change, and newer prevents it.
              .pipe(babel())
              .pipe(gulp.dest((file) => {
                  gutil.log('watch source and build app', file.base.replace('src', 'build'));
                  return file.base.replace('src', 'build');
              }))
       }); 
});


gulp.task('testwatchsource', () => {
    return gulp.watch(['build/**/*.js'])
                      .on('change', (file) => { 
                          file = 'testtape/' + file;
                          gutil.log('watch build and test', file);
                          return gulp.src(file)
                              .pipe(plumber())
                              .pipe(tape({
                              reporter: faucet()
                          }));
                      });
});

gulp.task('tdd', gulp.parallel('buildtest', 'testwatchtest', 'buildsource', 'testwatchsource'));
