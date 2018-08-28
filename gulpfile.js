var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    webpack = require('webpack-stream'),
    path = require('path');

var targetPath = './dist';
var exec = require('child_process').exec;

gulp.task('tsc', function (cb) {
    return exec('node ./node_modules/typescript/bin/tsc', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

gulp.task('nodemon', (callback) => {
    var called = false;

    return nodemon({
        script: './bin/nodemon.js',
        delay: "2500",
        ext: 'js html',
    })
        .on('start', () => {
            console.log('nodemon started.');
        })
        .on('restart', (hoge) => {
            console.log('nodemon restarting... by ' + hoge);
        })
});

gulp.task('webpack', () => {
    return gulp.src('dummy')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('dist/')); 
});

gulp.task('develop', () => {
    return runSequence(['tsc'],['webpack','nodemon']);
});




