const gulp = require('gulp');
const template = require('gulp-template');
const footer = require('gulp-footer');
const rename = require("gulp-rename");


gulp.task('createComponent', () => {

    let componentName =getArg('name');

    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter value '--name'");
        return;
    }

    if(componentName[0] !== componentName[0].toUpperCase()) {
        console.error("ERR! '--name' value must start with uppercase");
        return;
    }

    // add new component
    gulp.src('./generator/templates/client/component-template')
        .pipe(rename('client/src/components/' + 'Dmb_' + componentName + '.js'))
        .pipe(template({name: componentName}))
        .pipe(gulp.dest("./"));

});

gulp.task('createCoreComponent', () => {

    let componentName =getArg('name');

    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter value '--name'");
        return;
    }

    if(componentName[0] !== componentName[0].toUpperCase()) {
        console.error("ERR! '--name' value must start with uppercase");
        return;
    }

    // add new component and folder to core
    gulp.src('./generator/templates/client/core-component-template')
        .pipe(rename('client/src/components/core/' + 'Cor_' + componentName + '/'  + 'index.js'))
        .pipe(gulp.dest("./"));

    // update index.js in core
    gulp.src('./client/src/components/core/index.js')
        .pipe(footer("export { default as <%= name %> } from './<%= name %>';\n", { name : 'Cor_' + componentName} ))
        .pipe(gulp.dest('./client/src/components/core/'));

});


function getArg(name) {

    let i = process.argv.indexOf('--' + name);
    if(i > -1) {
        return process.argv[i+1];
    }

    return null;

}
