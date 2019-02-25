const fs = require('fs')
const gulp = require('gulp')
const webServer = require('gulp-webserver')

gulp.task('server', () => {
  return gulp.src('.')
    .pipe(webServer({
      host: 'localhost',
      port: 6969,
      middleware: (req, res) => {
        const headPage = fs.readFileSync('./index.html')
        res.end(headPage)
      }
    }))
})

gulp.task('default', ['server'])