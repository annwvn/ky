var gulp = require('gulp') 
var webserver = require('gulp-webserver') 

gulp.task('server',()=>{
    return gulp.src(".")
    .pipe(webserver({
        host:'localhost',
        port:3000,
        middleware:(req,res)=>{
            res.writeHead(200,{
                "Content-Type":"text/json",
                "Access-Control-Allow-Origin":"*"
            })
            const data = JSON.stringify({name:"yl",age:18})
            res.end(data)
        }
    }))
})
gulp.task("default",['server'])