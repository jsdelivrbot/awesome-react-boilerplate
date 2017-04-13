const gulp = require('gulp');
const template = require('gulp-template');

gulp.task('createCoreComponent', () =>
	  gulp.src('generator/templates/client/core-component-template', base: {'./'})
		  .pipe(rename('client/src/components/core/' + process.argv[4]))
		  .pipe(gulp.dest("./"));
);
