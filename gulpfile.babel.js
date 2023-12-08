
import gulp from 'gulp';
import yargs from 'yargs';
//import sass from 'gulp-sass';
import gulpsass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';

const PRODUCTION = yargs.argv.prod;
var sass = require('gulp-sass')(require('sass'));

export const styles = () => {
     return gulp.src('src/assets/scss/bundle.scss')
     .pipe(sass().on('error', sass.logError))
     .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(gulp.dest('dist/asset/css'));
}
//export default hello;