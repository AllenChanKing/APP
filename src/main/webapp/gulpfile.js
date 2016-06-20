// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var minifycss  = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('scripts', function() {
    gulp.src('./js/*/*.js')
        .pipe(jshint())
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
        //.pipe(notify('scripts task complete'));
});
gulp.task('css', function() {
    gulp.src('./css/*.css')
        .pipe(rename('all.min.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('./dist'));
        //.pipe(notify('css task complete'));
});

gulp.task('clean', function() { 
   gulp.src(['./dist/*.*'], {read: false})
    	.pipe(clean());
        //.pipe(notify('clean task complete'));
});

gulp.task('dev',['clean'],function(){
	gulp.run('scripts','css');
    gulp.watch('./js/*.js', ['scripts']);
    gulp.watch('./css/*.css', ['css']);
});

