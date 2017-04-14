const gulp = require('gulp');
const template = require('gulp-template');
const footer = require('gulp-footer');;
const rename = require("gulp-rename");

gulp.task('createCoreComponent', () => {

    let componentName =getArg('name');

    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter '--name'");
        return;
    }

    // add new component and folder to core
    gulp.src('./generator/templates/client/core-component-template')
        .pipe(rename('client/src/components/core/' + '/' + componentName + '/'  + componentName + '.js'))
        .pipe(gulp.dest("./"));

    // update index.js in core
    gulp.src('./client/src/components/core/index.js')
        .pipe(footer("export { default as <%= name %> } from './<%= name %>';\n", { name : componentName} ))
        .pipe(gulp.dest('./client/src/components/core/'));

});

function getArg(name) {

    let i = process.argv.indexOf('--' + name);
    if(i > -1) {
        return process.argv[i+1];
    }

    return null;

}
