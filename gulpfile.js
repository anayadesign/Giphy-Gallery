var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');

gulp.task('html', function(){
  return gulp.src('source/*.html')
    //.pipe(pug())
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function(){
  return gulp.src('source/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function(){
  return gulp.src('source/js/*.js')
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', [ 'html', 'css', 'js' ]);
