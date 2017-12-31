var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    clean = require('gulp-clean'),
    sequence = require('gulp-sequence');

gulp.task('default',sequence(
    'gulp_clean',
    'gulp_controllers_uglify',
    'gulp_models_uglify',
    'gulp_routes_uglify',
    'gulp_utilities_uglify',
    'gulp_views_copy',
    'gulp_test_copy',
    'gulp_public_copy',
    'gulp_node_modules_copy',
    'gulp_main_file_uglify',
    'gulp_main_file_copy'
));

gulp.task('gulp_clean', function () {
    return gulp.src('../../bin/win/app', {read: false})
        .pipe(clean({force:true}));
});

gulp.task('gulp_controllers_uglify', function () {
    return gulp.src('controllers/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../../bin/win/app/controllers'));
});

gulp.task('gulp_models_uglify', function () {
    return gulp.src('models/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../../bin/win/app/models'));
});

gulp.task('gulp_routes_uglify', function () {
    return gulp.src('routes/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../../bin/win/app/routes'));
});

gulp.task('gulp_utilities_uglify', function () {
    return gulp.src('utilities/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('../../bin/win/app/utilities'));
});

gulp.task('gulp_views_copy', function () {
    return gulp.src('views/**/*')
        .pipe(gulp.dest('../../bin/win/app/views'));
});

gulp.task('gulp_test_copy', function () {
    return gulp.src('test/**/*')
        .pipe(gulp.dest('../../bin/win/app/test'));
});

gulp.task('gulp_public_copy', function () {
    return gulp.src('public/**/*')
        .pipe(gulp.dest('../../bin/win/app/public'));
});

gulp.task('gulp_node_modules_copy', function () {
    return gulp.src('node_modules/**/*')
        .pipe(gulp.dest('../../bin/win/app/node_modules'));
});

gulp.task('gulp_main_file_uglify', function () {
    return gulp.src(['app.js', 'www'])
        .pipe(uglify())
        .pipe(gulp.dest('../../bin/win/app'));
});

gulp.task('gulp_main_file_copy', function () {
    return gulp.src(['package.json'])
        .pipe(gulp.dest('../../bin/win/app'));
});
