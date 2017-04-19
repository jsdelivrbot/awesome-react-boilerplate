const gulp = require('gulp');
const template = require('gulp-template');
const footer = require('gulp-footer');
const rename = require("gulp-rename");
const inject = require('gulp-inject-string');
const replace = require('gulp-replace');

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

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
        "import { combineReducers } from 'redux-immutable';",
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
/*** SERVER ***/
gulp.task('createApi', () => {
    let apiName = getArg('name');
    if(!validateName(apiName, '--name', false)) return;
    var UPPERCASE_MODEL_NAME = apiName.toString().toUpperCase();
    var CapitalLetterModelName = capitalize(apiName);
    createTemplate(
        './generator/templates/server/api-controller-template',
        'server/src/api/'+apiName+'/'+apiName+'.controller.js',
        {
         name: apiName,
         upperCaseModelName : UPPERCASE_MODEL_NAME,
         capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    createTemplate(
        './generator/templates/server/model-template',
        'server/src/api/'+apiName+'/model/'+apiName+'.js',
        {
            capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    createTemplate(
        './generator/templates/server/responses-template',
        'server/src/api/'+apiName+'/responses/index.js',
        {
         capitalLetterModelName: CapitalLetterModelName,
         upperCaseModelName : UPPERCASE_MODEL_NAME
        }
    );
    
    createTemplate(
        './generator/templates/server/index-template',
        'server/src/api/'+apiName+'/index.js',
        {
         name: apiName,
         capitalLetterModelName: CapitalLetterModelName
        }
    );
    
    replaceText(
        './server/src/routes/index.js',
        './server/src/routes/',
        "// LASTLINE",
        "app.use('/"+apiName+"', require('../api/"+apiName+"'));\r\n// LASTLINE"
    );
    
});


/*** HELPERS ***/


function replaceText(src,dest,needle,text){
     gulp.src(src)
    .pipe(replace(needle, text))
    .pipe(gulp.dest(dest));
}

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
