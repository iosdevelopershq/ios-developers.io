const gulp = require('gulp')
const hb = require('gulp-hb')
const layouts = require('handlebars-layouts')

gulp.task('default', ['build'], () => {
  gulp.watch('./src/**/*', ['build'])
})

gulp.task('build', ['handlebars'])

gulp.task('handlebars', () => {
  const hbStream = hb()
  .partials('./src/layouts/**/*.hbs')
  .partials('./src/partials/**/*.hbs')
  .helpers(layouts)
  return gulp
  .src('./src/*.html')
  .pipe(hbStream)
  .pipe(gulp.dest('./dist'))
})
