/*
var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done){
    console.log('Hello, Sohan');

    done();
}

gulp.task('Hello',function(done){
    console.log('Hello');
    done();
});
*/

import gulp from 'gulp';

export const hello = (done) => {
    console.log('hello');
    done();
}
export default hello;