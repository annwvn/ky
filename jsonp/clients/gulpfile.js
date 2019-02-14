const fs = require('fs') 
const gulp = require('gulp') 
const webserver = require('gulp-webserver') 

gulp.task('api',()=>{
    return gulp.src('.')
    .pipe(webserver({
        host:'localhost',
        port:8080,
        middleware:(req,res)=>{
            const indexPage = fs.readFileSync("./index.html");
            res.end(indexPage)
        }
    }))
})
gulp.task('default',['api'])