import * as gulp from "gulp";
import tslint from "gulp-tslint";
import * as sass from "gulp-sass";
import * as autoprefixer from "gulp-autoprefixer";
import * as ts from "gulp-typescript";
import * as sourcemaps from "gulp-sourcemaps";

const stylish = require("gulp-tslint-stylish");

let tsClientFiles = "./wwwroot/app/**/*.ts",
    tsServerFiles = ["./*.ts", "./routes/*.ts", "./interfaces/*.ts", "./models/*.ts"],
    tsFiles = tsServerFiles.concat(tsClientFiles),
    typings = ["./typings/main/**/*.ts", "./typings/main.d.ts"];

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
