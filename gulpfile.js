const gulp = require('gulp');
const template = require('gulp-template');
var footer = require('gulp-footer');

gulp.task('createCoreComponent', () =>
	  gulp.src('generator/templates/client/core-component-template', base: {'./'})
		  .pipe(rename('client/src/components/core/' + process.argv[4]))
		  .pipe(gulp.dest("./"));
	  
	  gulp.src('client/src/components/core/index.js')
		  .pipe(footer('export { default as <%= name %> } from './<%= name %>';\n', { name : process.argv[4]} ))
		  .pipe(gulp.dest('./dist/')
);
