var del = require('del'),
    gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    runSequence = require('run-sequence'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    webpack = require('webpack'),
    gulpWebpack = require('webpack-stream'),
    webpackConfig = require('./webpack.config.js'),
    browserSync = require('browser-sync').create(),
    notifier = require('node-notifier'),

var PRODUCT = JSON.parse(process.env.PROD_ENV || '0');
var targetPath = './built';
var exec = require('child_process').exec;

// Default task
gulp.task('default', function() {
  runSequence('develop');
});

// Build typescript files using native tsc compiler
gulp.task('tsc', function (cb) {
  return exec('node ./node_modules/typescript/bin/tsc', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

// Task for development.
gulp.task('develop', ['copy-assets', 'tsc', 'css', 'lint'], function () {
  return runSequence('watch', 'webpack', 'test', 'start', 'webpack:watch');
});

// Start server and nodemon
gulp.task('nodemon', (callback) => {
  var called = false;

  return nodemon({
    verbose:false,
    script: './bin/www',
    delay: "2500",
    ext: 'js html css ejs ico txt pdf json',
    ignore: [
      'built/client/*',
      'built/public/*',
      '*.test.ts',
      '*.test.js',
      '*.ts',
      '*.tsx',
      '*.json',
      'node_modules']
  })
  .on('start', () => {
    if (!called) {
      called = true;
      setTimeout( () => {
        browserSync.init(null, {
          proxy: 'http://localhost:3000',
          port: 7000
        });
      }, 4000);
      callback();
    }
    console.log('nodemon started.');
  })
  .on('restart', (hoge) => {
    console.log('nodemon restarting... by ' + hoge);
    // when server reboot
    setTimeout( () => {
      browserSync.reload();
    }, 3000);
  });
});

// Setup browser-sync
gulp.task('start', ['nodemon'], () => {

});

// Reload browser
gulp.task('browser-reload', () => {
  return browserSync.reload();
});

// Build all
gulp.task('build', ['copy-assets', 'tsc', 'css', 'lint'] , () => {
  return runSequence('webpack');
});

// Copy nesesarry assets to built folder
gulp.task('copy-assets', () => {
  gulp.src(
    ['src/public/**/', '!src/public/**/*.scss', 'src/views/**/', 'config/**/' ],
    { base: './src' }
  ).pipe(gulp.dest(targetPath));
});

// Build css
gulp.task('css', () => {
  if ( PRODUCT =='production' ) {
  gulp.src('./src/public/css/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(cssmin())
    .pipe(gulp.dest('./built/public/css'));
  } else {
    gulp.src('./src/public/css/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./built/public/css'));
  }
});

// Webpack
gulp.task('webpack', () => {
  return gulp.src('dummy')
    .pipe(plumber({errorHandler: (error) => {
        notifier.notify({
            message: error.message,
            title: error.plugin,
            sound: 'Glass'
        });
    }}))
    .pipe(gulpWebpack(Object.assign({}, webpackConfig[0], {
      watch: false,
      }), webpack))
    .pipe(gulp.dest('built/public/js'))
    .pipe(browserSync.stream());
});

// Webpack with watch:true freese the runSequence, so we need to
// re-run this webpack with watch:true at the end of the sequence
gulp.task('webpack:watch', () => {
  return gulp.src('dummy')
    .pipe(gulpWebpack(Object.assign({}, webpackConfig[0], {
      watch: true,
      }), webpack))
    .pipe(gulp.dest('built/public/js'))
    .pipe(browserSync.stream());
});

// Watch for rebuild
gulp.task('watch', () => {
  gulp.watch('./src/public/css/*.scss', ['css'])
  .on('change', function(event) {
    console.log('File(scss) ' + event.path + ' was ' + event.type);
  });

  gulp.watch(['./src/**', '!./src/client/**/*', '!./src/public/css/*', '!./src/**/*.test.ts'], ()=> { return runSequence('tsc', 'copy-assets');})
  .on('change', function(event) {
    console.log('File(ts) ' + event.path + ' was ' + event.type);
  });

  gulp.watch('./src/**/*.test.ts', ()=> { return runSequence( 'tsc', 'test'); })
    .on('change', function(event) {
      console.log('File(test) ' + event.path + ' was ' + event.type);
    });

  gulp.watch('./built/public/css/*.css',['browser-reload'])
  .on('change', function(event) {
    console.log('File(css) ' + event.path + ' was ' + event.type);
  });
});

// uglify javascript files
gulp.task('uglify', function(){
  gulp.src('./src/public/js/*.js')
    .pipe(uglify({preserveComments: 'some'}))
    .pipe(gulp.dest(targetPath +'/public/js/'))
  ;
});

