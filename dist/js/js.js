gulp.task('images', function () {
    return gulp.src("src/img/**/*")
        .pipe(imagemin([
            imgCompress({
                loops: 4,
                min: 70,
                max: 80,
                quality: 'high'
              }),
        ]))
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
});