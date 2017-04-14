const gulp = require('gulp');
const template = require('gulp-template');
const footer = require('gulp-footer');
const rename = require("gulp-rename");


gulp.task('createComponent', () => {

    let componentName =getArg('name');

    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter '--name'");
        return;
    }

    // add new component
    gulp.src('./generator/templates/client/component-template')
        .pipe(rename('client/src/components/' + 'dmb.' + componentName + '.js'))
        .pipe(gulp.dest("./"));

});

gulp.task('createCoreComponent', () => {

    let componentName =getArg('name');

    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter '--name'");
        return;
    }

    // add new component and folder to core
    gulp.src('./generator/templates/client/core-component-template')
        .pipe(rename('client/src/components/core/' + 'cor.' + componentName + '/'  + 'index.js'))
        .pipe(gulp.dest("./"));

    // update index.js in core
    gulp.src('./client/src/components/core/index.js')
        .pipe(footer("export { default as <%= name %> } from './<%= name %>';\n", { name : 'cor.' + componentName} ))
        .pipe(gulp.dest('./client/src/components/core/'));

});


function getArg(name) {

    let i = process.argv.indexOf('--' + name);
    if(i > -1) {
        return process.argv[i+1];
    }

    return null;

}
