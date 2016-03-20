import * as gulp from "gulp";
import tslint from "gulp-tslint";
import * as sass from "gulp-sass";
import * as autoprefixer from "gulp-autoprefixer";
import * as ts from "gulp-typescript";
import * as sourcemaps from "gulp-sourcemaps";

const stylish = require("gulp-tslint-stylish");
const sassFiles = "./wwwroot/app/**/*.scss";
const tsProject = ts.createProject("tsconfig.json");
const tsFiles = ["./*.ts", "./**/*.ts"];

gulp.task("vet", () => {
    return gulp
        .src(tsFiles)
        .pipe(tslint())
        .pipe(tslint.report(stylish));
});

gulp.task("styles", () => {
    return gulp
        .src(sassFiles, { base: "./" })
        .pipe(sass())
        .pipe(autoprefixer({browsers: ["last 2 version", "> 5%"]}))
        .pipe(gulp.dest("./"));
});

gulp.task("sass-watcher", () => {
   gulp.watch([sassFiles], ["styles"]);
});


gulp.task("ts", () => {
    return tsProject
        .src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
});
gulp.task("watch-ts", () => {
    gulp.watch(tsFiles, ["ts"]);
});
 gulp.task("watch-all", () => {
    gulp.watch(tsFiles, ["ts"]);
    gulp.watch([sassFiles], ["styles"]);
});
