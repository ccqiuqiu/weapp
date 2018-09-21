'use strict'

const gulp = require('gulp')
const px2rpx = require('gulp-px2rpx')

gulp.task('css', function () {
  gulp.src('static/**/*.wxss')
    .pipe(px2rpx({
      screenWidth: 375, // 设计稿屏幕
      remPrecision: 2 // 小数精度
    }))
    .pipe(gulp.dest('static'))
})
