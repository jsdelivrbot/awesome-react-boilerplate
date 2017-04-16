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
    createTemplate(
        './generator/templates/client/component-template',
        'client/src/components/' + 'Dmb_' + componentName + '.js',
        {name: componentName}
    );
    
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
    createTemplate(
        './generator/templates/client/core-component-template',
        'client/src/components/core/' + 'Cor_' + componentName + '/'  + 'index.js',
        {}
    );

    // update index.js in core
    addFooter(
        './client/src/components/core/index.js',
        './client/src/components/core/'
        "export { default as <%= name %> } from './<%= name %>';\n",
        { name : 'Cor_' + componentName}
    );
    
});

/*** HELPERS ***/

function createTemplate(src, dest, templateParams) {
    gulp.src(src)
        .pipe(rename(dest))
        .pipe(templateParams(injectParams))
        .pipe(gulp.dest("./"));
}

function addFooter(src, dest, footerTemplate, footerParams) {
    gulp.src(src)
        .pipe(footer(footerTemplate, footerParams ))
        .pipe(gulp.dest(dest));
}

function getArg(name) {

    let i = process.argv.indexOf('--' + name);
    if(i > -1) {
        return process.argv[i+1];
    }

    return null;

}
