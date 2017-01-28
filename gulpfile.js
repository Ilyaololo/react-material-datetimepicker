let argv = require('yargs').argv,
    babelify = require('babelify'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    concat = require('gulp-concat'),
    gulp = require('gulp'),
    gulpif = require('gulp-if'),
    less = require('gulp-less'),
    myth = require('gulp-myth'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    streamify = require('gulp-streamify'),
    uglify = require('gulp-uglify'),
    watchify = require('watchify');


gulp.task('scripts', () => {
    let cb = browserify({
        //entries:      ['./app.js'],
        entries:      ['./src/DataTimePicker/DataTimePicker.jsx'],
        debug:        true,
        cache:        {},
        packageCache: {},
        fullPaths:    true,
        extensions:   ['.jsx', '.js'],
        plugin:       [watchify]
    });
    let rebundle = () => {
        cb.transform(babelify);
        cb.bundle()
            .on('error', (err) => {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('react-material-datetime-picker.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({ loadMaps: true }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build/'));
    };
    cb.on('update', rebundle);
    rebundle();
});

gulp.task('convert-sass', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(myth())
        .pipe(concat("react-material-datetime-picker.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/'));
});

gulp.task('js', function () {
    let cb = browserify({
        entries:      ['./src/DataTimePicker/DataTimePicker.jsx'], // Only need initial file, browserify finds the deps
        //entries:      ['./app.js'],
        debug:        !argv.prod, // Gives us sourcemapping
        cache:        {},
        packageCache: {},
        fullPaths:    true,
        extensions:   ['.jsx', '.js']
    });
    process.env.NODE_ENV = argv.prod ? "production" : "development";
    cb.transform(babelify.configure());
    cb.bundle()
        .pipe(source('react-material-datetime-picker.js'))
        .pipe(gulpif(argv.prod, streamify(uglify())))
        .pipe(gulp.dest('./build/'));
});

gulp.task('default', ['convert-sass', 'js']);