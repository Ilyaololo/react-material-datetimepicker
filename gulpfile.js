let gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    watchify = require('watchify'),
    babelify = require('babelify'),
    sourcemaps = require('gulp-sourcemaps'),
    myth = require('gulp-myth'),
    concat = require('gulp-concat'),
    less = require('gulp-less'),
    sass = require('gulp-sass');

gulp.task('scripts', () => {
    let cb = browserify({
        entries: ['./src/index.js'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,
        extensions: ['.jsx', '.js'],
        plugin: [watchify]
    });
    let rebundle = () => {
        cb.transform(babelify);
        cb.bundle()
            .on('error', (err) => {
                console.error(err);
                this.emit('end');
            })
            .pipe(source('main.js'))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('./build/js/'));
    };
    cb.on('update', rebundle);
    rebundle();
});

gulp.task('convert-less', function () {
    gulp.src('./src/*.less')
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(myth())
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('convert-sass', function () {
    gulp.src('./src/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(myth())
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css/'));
});