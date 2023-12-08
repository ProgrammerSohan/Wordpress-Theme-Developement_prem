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