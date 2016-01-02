/// <binding BeforeBuild='default' ProjectOpened='bower' />
var gulp = require('gulp');
var bower = require('gulp-bower');

gulp.task('bower', function () {
    return bower('./bower_components');
});

gulp.task('default', ['bower'],function () {
    
    gulp.src(['bower_components/kendo-ui-appbuilder-core/js/*.js',
              'bower_components/kendo-ui-appbuilder-core/styles/**/*'],
             { base: 'bower_components/kendo-ui-appbuilder-core' })
        .pipe(gulp.dest('www/lib/kendo'));  

});