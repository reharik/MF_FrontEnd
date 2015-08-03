"use strict";
/**
 * Dependencies
 */
require("babel/polyfill");

var gulp = require("gulp");
var browserify = require("browserify");
var concat = require("gulp-concat");
var less = require("gulp-less");
var minifyCSS = require('gulp-minify-css');
var react = require("gulp-react");
var gulpif = require("gulp-if");
var gutil = require('gulp-util');
var sourcemaps = require("gulp-sourcemaps");
var source = require("vinyl-source-stream");
var babelify = require("babelify");
var watchify = require("watchify");
var del = require("del");
var notify = require("gulp-notify");
var config = require("config");

var DEBUG = process.env.NODE_ENV === "development";

/**
 * Sub-Tasks
 */

gulp.task("clean", function(cb){
   return del([config.get("paths.out.build_js"), config.get("paths.out.output")], {force:true});
});

gulp.task("clean-deploy", function(){
    return del(config.get("paths.out.deploy"), {force:true});
});

gulp.task("jsx-compile", function () {
  return gulp.src(config.get("paths.in.jsx"))
  .pipe(react())
  .on("error", function (err) {
    console.log(err.toString());
    this.emit("end");
  })
  .pipe(gulp.dest(config.get("paths.out.build_js")));
});

gulp.task("less-compile", function () {
    return gulp.src(config.get("paths.in.less"))
        .pipe(gulpif(DEBUG, sourcemaps.init()))
        .pipe(less())
        .on("error", function (err) {
            console.log(err.toString());
            this.emit("end");
        })
        .pipe(concat("app.css"))
        .pipe(minifyCSS())
        .pipe(gulpif(DEBUG, sourcemaps.write()))
        .pipe(gulp.dest(config.get("paths.out.output_css")));
});

// copy non compiled js files
gulp.task("copy-js", function () {
    return gulp.src(config.get("paths.in.js"))
  .pipe(gulp.dest(config.get("paths.out.build_js")));
});

gulp.task("_deploy",['_bundle'],function () {
    gulp.src(config.get("paths.in.rootfiles"))
        .pipe(gulp.dest(config.get("paths.out.deploy")));
    return gulp.src(config.get("paths.in.app"))
        .pipe(gulp.dest(config.get("paths.out.deploy")));
});

gulp.task("watch",  function(){
    // Wrap with watchify and rebundle on changes
    bundler = watchify(bundler);
    // Rebundle on update
    bundler.on('update', bundle);
});

var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: false,
    // Specify the entry point of your app
    entries: './build/app.js',
    // Enable source maps!
    debug: config.get("debug")
});

var bundle = function() {
    // Log when bundling starts
    gutil.log('Bundling', gutil.colors.green('app.js'));

    return bundler
        .require("react")
        .transform(babelify)
        .bundle()
        // Report compile errors
        .on('error', function() {
            var args = Array.prototype.slice.call(arguments);
            // Send error to notification center with gulp-notify
            notify.onError({
                title: "Compile Error",
                message: "<%= error.message %>"
            }).apply(this, args);
            // Keep gulp from hanging on this task
            this.emit('end');
        })
        // Use vinyl-source-stream to make the
        // stream gulp compatible. Specifiy the
        // desired output filename here.
        .pipe(source('app.js'))
        // Specify the output destination
        .pipe(gulp.dest(config.get("paths.out.output_js")))
        .on('end', function(){gutil.log('Bundled', gutil.colors.green('app.js'))});
};


/**
 * Global tasks
 */
gulp.task("build", ["clean", "jsx-compile", "copy-js", "less-compile"]);

gulp.task("dev", ["build", "watch"], bundle);

gulp.task("_bundle",[ "jsx-compile", "copy-js"], bundle);

gulp.task("deploy", ["clean-deploy","clean", "jsx-compile", "copy-js", "less-compile", "_bundle", "_deploy"] );


gulp.task("default", ["dev"]);
