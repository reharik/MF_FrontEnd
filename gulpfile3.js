var gulp         = require('gulp');
var browsersync  = require('browser-sync');
var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var watchify     = require('watchify');
var bundleLogger = require('../../util/bundleLogger');
var handleErrors = require('../../util/handleErrors');
var config       = require('../../config').browserify;
var gutil        = require('gulp-util');
/**
 * Run JavaScript through Browserify
 */
gulp.task('scripts', function(callback) {

    browsersync.notify('Compiling JavaScript');

    var browserifyThis = function() {

        var bundler = browserify({
            // Required watchify args
            cache: {}, packageCache: {}, fullPaths: false,
            // Specify the entry point of your app
            entries: bundleConfig.entries,
            // Add file extentions to make optional in your requires
            extensions: config.extensions,
            // Enable source maps!
            debug: config.debug
        });

        var bundle = function() {
            // Log when bundling starts
            gutil.log('Bundling', gutil.colors.green('app.js'));

            return bundler
                .require("react")
                .transform(babelify)
                .bundle()
                // Report compile errors
                .on('error', handleErrors)
                // Use vinyl-source-stream to make the
                // stream gulp compatible. Specifiy the
                // desired output filename here.
                .pipe(source(bundleConfig.outputName))
                // Specify the output destination
                .pipe(gulp.dest(bundleConfig.dest))
                .on('end', gutil.log('Bundled', gutil.colors.green(filepath)));
        };

        if(global.isWatching) {
            // Wrap with watchify and rebundle on changes
            bundler = watchify(bundler);
            // Rebundle on update
            bundler.on('update', bundle);
        }

        return bundle();
    };
});