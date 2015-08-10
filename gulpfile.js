var gulp = require("gulp"),
  connect = require("gulp-connect"),
  opn = require("opn");

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true,
    port: 8888
  });
  opn('http://localhost:8888');
});
 
// HTML
gulp.task('html', function () {
  gulp.src('./src/*.html')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist'));
});

// CSS
gulp.task('css', function () {
  gulp.src('./src/css/**/*.css')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/css'));
});

// JS
gulp.task('js', function () {
  gulp.src('./src/js/**/*.js')
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/js'));
});


gulp.task('watch', function () {
  gulp.watch(['./src/*.html', 'src/css/**/*.css', 'src/js/*.js'], ['html', 'css', 'js']);
});

gulp.task('default', ['connect', 'watch']);
