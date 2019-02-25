const fs = require('fs')
const gulp = require('gulp')
const webServer = require('gulp-webserver')

gulp.task('server', () => {
  return gulp.src('.')
    .pipe(webServer({
      host: 'localhost',
      port: 8888,
      middleware: (req, res) => {
        const headPage = fs.readFileSync('./parent.html')
        res.end(headPage)
      }
    }))
})

gulp.task('default', ['server'])