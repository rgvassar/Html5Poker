"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const tsc = require("gulp-tsc");
const sassFiles = "./wwwroot/app/**/*.scss";
const tsServer = ["./*.ts", "./**/*.ts"];
gulp.task("styles", () => {
    return gulp
        .src(sassFiles, { base: "./" })
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ["last 2 version", "> 5%"] }))
        .pipe(gulp.dest("./"));
});
gulp.task("sass-watcher", () => {
    gulp.watch([sassFiles], ["styles"]);
});
gulp.task("tsServer", () => {
    return gulp
        .src(tsServer)
        .pipe(tsc({
          module: "commonjs",
          sourceMap: true,
          target: "es6",
          removeComments: true,
          noImplicitAny: true,
          moduleResolution: "node"
        }))
        .pipe(gulp.dest("./"));
});
gulp.task("watch-ts", () => {
    gulp.watch(tsFiles, ["ts"]);
});
gulp.task("watch-all", () => {
    gulp.watch(tsFiles, ["ts"]);
    gulp.watch([sassFiles], ["styles"]);
});
