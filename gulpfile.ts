import gulp = require("gulp");
import tslint from "gulp-tslint";
let stylish = require("gulp-tslint-stylish");

let tsfiles = [
            "./*.ts",
            "./wwwroot/app/**/*.ts"
        ];

gulp.task("vet", (): void => {
    return gulp
        .src(tsfiles)
        .pipe(tslint())
        .pipe(tslint.report(stylish));
});
