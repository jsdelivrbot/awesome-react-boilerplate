const gulp = require('gulp');
const template = require('gulp-template');

gulp.task('createCoreComponent', () =>
	gulp.src('generator/templates/client/core-component-template',base: {'./'})
		.pipe(gulp.dest('client/src'))
);

functio getArg (name) {
  var i = process.argv.indexOf(name);
  if(i>-1) {
      return process.argv[i+1];
  }
  return null;
}
