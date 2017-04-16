const gulp = require('gulp');
const template = require('gulp-template');
const footer = require('gulp-footer');
const rename = require("gulp-rename");
const inject = require('gulp-inject-string');


gulp.task('createComponent', () => {
    let componentName = getArg('name');
    
    if(!validateName(componentName, '--name', true)) return;

    createTemplate(
        './generator/templates/client/component-template',
        'client/src/components/' + 'Dmb_' + componentName + '.js',
        {name: componentName}
    );
    
});

gulp.task('createCoreComponent', () => {
    let componentName = getArg('name');

    if(!validateName(componentName, '--name', true)) return;

    createTemplate(
        './generator/templates/client/core-component-template',
        'client/src/components/core/' + 'Cor_' + componentName + '/'  + 'index.js',
        {}
    );

    addFooter(
        './client/src/components/core/index.js',
        './client/src/components/core/',
        "export { default as <%= name %> } from './<%= name %>';\n",
        { name : 'Cor_' + componentName}
    );
});

gulp.task('createActionFiles', () => {
    let actionName = getArg('name');
    
    if(!validateName(actionName, '--name', false)) return;

    createTemplate(
        './generator/templates/client/actions-types-template',
        'client/src/actions/' + actionName + '/' + 'actions_types.js',
        {}
    );
       
    createTemplate(
        './generator/templates/client/actions-template',
        'client/src/actions/' + actionName + '/' + 'actions_' + actionName + '.js',
        {}
    );
    
});

gulp.task('createReducer', () => {
    let reducerName = getArg('name');
    let sotreName = getArg('store');

    if(!validateName(reducerName, '--name', false) && !validateName(sotreName, '--store', false)) return;

    createTemplate(
        './generator/templates/client/reducer-template',
        'client/src/reducers/' + reducerName + '/' + 'reducer_' + reducerName + '.js',
        {name: reducerName}
    );

    injectAfter(
        './client/src/reducers/index.js',
        './client/src/reducers/',
        "import { combineReducers } from 'redux';",
        '\nimport ' + reducerName + ' from ' + "'./" + reducerName + '/' + 'reducer_' + reducerName + "';"
    ).on('end', () => {
        injectAfter(
            './client/src/reducers/index.js',
            './client/src/reducers/',
            "const rootReducer = combineReducers({",
            '\n\t' + sotreName + ': ' + reducerName + ','
        );
    });
});

/*** HELPERS ***/

function injectAfter(src, dest, injectAfter, iject) {
    return gulp.src(src)
        .pipe(inject.after(injectAfter, iject))
        .pipe(gulp.dest(dest));
}

function createTemplate(src, dest, templateParams) {
    return gulp.src(src)
        .pipe(rename(dest))
        .pipe(template(templateParams))
        .pipe(gulp.dest("./"));
}

function addFooter(src, dest, footerTemplate, footerParams) {
    return gulp.src(src)
        .pipe(footer(footerTemplate, footerParams ))
        .pipe(gulp.dest(dest));
}

function validateName (componentName, expectedParam, checkFirstIsUppercase) {
    if(!componentName) {
        console.error("ERR! You are not select mandatory parameter value " + expectedName);
        return false;
    }

    if(componentName[0] !== componentName[0].toUpperCase() && checkFirstIsUppercase) {
        console.error("ERR!"+ expectedName + " value must start with uppercase");
        return false;
    }

    return true;
}

function getArg(name) {

    let i = process.argv.indexOf('--' + name);
    if(i > -1) {
        return process.argv[i+1];
    }

    return null;

}
