var url = require('url') 
var gulp = require('gulp') 
var webserver = require('gulp-webserver') 

gulp.task('server',()=>{
    return gulp.src(".")
    .pipe(webserver({
        host:'localhost',
        port:3000,
        middleware:(req,res)=>{
            let params = url.parse(req.url,true)
            let data = JSON.stringify({name:'yl',age:18})
            res.writeHead(200,{
                "Content-Type":"application/json",
            })
            if(params.query && params.query.callback){
                let temp = params.query.callback + '('  + data + ')'
                res.end(temp)
            }else{
            res.end(data)

            }
        }
    }))
})
gulp.task("default",['server'])