"use strict";
var gulp = require("gulp");
var gulp_tslint_1 = require("gulp-tslint");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var stylish = require("gulp-tslint-stylish");
var sassFiles = "./wwwroot/app/**/*.scss";
var tsProject = ts.createProject("tsconfig.json");
var tsFiles = ["./*.ts", "./**/*.ts"];
gulp.task("vet", function () {
    return gulp
        .src(tsFiles)
        .pipe(gulp_tslint_1.default())
        .pipe(gulp_tslint_1.default.report(stylish));
});
gulp.task("styles", function () {
    return gulp
        .src(sassFiles, { base: "./" })
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ["last 2 version", "> 5%"] }))
        .pipe(gulp.dest("./"));
});
gulp.task("sass-watcher", function () {
    gulp.watch([sassFiles], ["styles"]);
});
gulp.task("ts", function () {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
});
gulp.task("watch-ts", function () {
    gulp.watch(tsFiles, ["ts"]);
});
gulp.task("watch-all", function () {
    gulp.watch(tsFiles, ["ts"]);
    gulp.watch([sassFiles], ["styles"]);
});

//# sourceMappingURL=gulpfile.js.map
