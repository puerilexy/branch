var gulp=require('gulp');
var sass=require('gulp-sass');
  
  //编译sass
  gulp.task('css',function(){
      return gulp.src('./src/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css'))
  })
  gulp.task('default',function(){
      return gulp.watch('./src/sass/*.scss',gulp.series('css'))
  })