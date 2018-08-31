var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    webpack = require('webpack-stream'),
    path = require('path'),
    browserSync = require('browser-sync').create();

var targetPath = './dist';
var exec = require('child_process').exec;

gulp.task('copy-assets', () => {
    gulp.src(
        ['src/public/**/', '!src/views/**/'],
        { base: './src' }
    ).pipe(gulp.dest(targetPath));
});

gulp.task('browser-reload', () => {
    return browserSync.reload();
})

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
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('dist/public/js'));
});

gulp.task('develop', () => {
    return runSequence(['copy-assets'], ['tsc'],['watch','webpack', 'nodemon']);
});

gulp.task('watch', () => {
    gulp.watch(['./src/**'], () => { return runSequence('tsc', 'copy-assets', 'webpack'); })
        .on('change', function (event) {
            console.log('File(ts) ' + event.path + ' was ' + event.type);
        });
    gulp.watch('./dist/public/css/*.css', ['browser-reload'])
        .on('change', function (event) {
            console.log('File(css) ' + event.path + ' was ' + event.type);
        });

})

gulp.task('default', () => {
    runSequence('develop');
});




