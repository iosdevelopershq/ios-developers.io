const gulp = require('gulp')
const hb = require('gulp-hb')
const layouts = require('handlebars-layouts')
const sass = require('gulp-sass')

gulp.task('default', ['build'], () => {
  gulp.watch('./src/**/*', ['build'])
})

gulp.task('build', ['handlebars', 'sass'])

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

gulp.task('sass', () => {
  return gulp
  .src('./src/sass/application.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css'))
})
