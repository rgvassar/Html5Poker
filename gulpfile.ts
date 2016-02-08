import gulp = require("gulp");
import tslint from "gulp-tslint";
let stylish = require("gulp-tslint-stylish");
import sass = require("gulp-sass");
import autoprefixer = require("gulp-autoprefixer");
import ts = require("gulp-typescript");
import sourcemaps = require("gulp-sourcemaps");

let tsClientFiles = "./wwwroot/app/**/*.ts",
    tsServerFiles = ["./*.ts", "./routes/*.ts", "./interfaces/*.ts"],
    tsFiles = tsServerFiles.concat(tsClientFiles),
    typings = "./typings/**/*.ts";

let sassFiles = "./wwwroot/app/**/*.scss";

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


gulp.task("ts-client", () => {
    return gulp
        .src([tsClientFiles], { base: "./" })
        .pipe(sourcemaps.init())
        .pipe(ts({
            emitDecoratorMetadata: true,
            experimentalDecorators: true,
            module: "system",
            moduleResolution: "node",
            noImplicitAny: true,
            removeComments: true,
            target: "es5"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
});

gulp.task("ts-server", () => {
    return gulp
        .src(tsServerFiles.concat(typings), { base: "./" })
        .pipe(sourcemaps.init())
        .pipe(ts({
            module: "commonjs",
            noImplicitAny: true,
            removeComments: true,
            target: "es5"
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./"));
});

gulp.task("ts-watcher", () => {
    gulp.watch([tsClientFiles], ["ts-client"]);
    gulp.watch(tsServerFiles, ["ts-server"]);
});
 gulp.task("watch-all", () => {
    gulp.watch([tsClientFiles], ["ts-client"]);
    gulp.watch(tsServerFiles, ["ts-server"]);
    gulp.watch([sassFiles], ["styles"]);
});
