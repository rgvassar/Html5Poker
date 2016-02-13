var gulp = require("gulp");
var gulp_tslint_1 = require("gulp-tslint");
var stylish = require("gulp-tslint-stylish");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");
var tsClientFiles = "./wwwroot/app/**/*.ts", tsServerFiles = ["./*.ts", "./routes/*.ts", "./interfaces/*.ts"], tsFiles = tsServerFiles.concat(tsClientFiles), typings = "./typings/**/*.ts";
var sassFiles = "./wwwroot/app/**/*.scss";
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
gulp.task("ts-client", function () {
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
gulp.task("ts-server", function () {
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
gulp.task("ts-watcher", function () {
    gulp.watch([tsClientFiles], ["ts-client"]);
    gulp.watch(tsServerFiles, ["ts-server"]);
});
gulp.task("watch-all", function () {
    gulp.watch([tsClientFiles], ["ts-client"]);
    gulp.watch(tsServerFiles, ["ts-server"]);
    gulp.watch([sassFiles], ["styles"]);
});

//# sourceMappingURL=gulpfile.js.map
