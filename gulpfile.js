var  gulp           = require('gulp'),
    notify         = require('gulp-notify'),
    path           = require('path'),
    uglify         = require('gulp-uglify'),
    concat         = require('gulp-concat'),
    rename         = require('gulp-rename'),
    plumber        = require('gulp-plumber'),
    webserver      = require('gulp-webserver');


/*
|--------------------------------------------------------------------------
| Error Catching
|--------------------------------------------------------------------------
*/

var onError = function (err) {  
    console.log(err);
    this.emit('end');
};


/*
|--------------------------------------------------------------------------
| Compile Javascript
|--------------------------------------------------------------------------
*/

gulp.task('uglify', function() {
    return gulp.src('src/knuckles.js')
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(concat('knuckles.js'))
        .pipe(rename('knuckles.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'JS - Done!' }))
});



/*
|--------------------------------------------------------------------------
| Watch Task
|--------------------------------------------------------------------------
*/

gulp.task('watch', function() {
    gulp.watch('src/*.js', ['uglify']);
});



/*
|--------------------------------------------------------------------------
| Server
|--------------------------------------------------------------------------
*/

gulp.task('webserver', function() {
    return gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: false,
            open: true
        }));
});



/*
|--------------------------------------------------------------------------
| Register Tasks
|--------------------------------------------------------------------------
*/

gulp.task('run', ['webserver','watch']);

