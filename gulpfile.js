var { watch, src, dest, parallel, series } = require('gulp');
var browserSync = require('browser-sync');
var del = require('del');
var imagemin = require('gulp-imagemin');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var uglify = require('gulp-uglify');


// Девсервер
function devServer(cb) {
  var params = {
    watch: true,
    reloadDebounce: 150,
    notify: false,
    server: { baseDir: './build' },
  };

  browserSync.create().init(params);
  cb();
}

//Очистка build
function clearBuild() {
  return del('build/');
}

function buildPages() {
  // Пути можно передавать массивами
  return src('src/pages/*.html')
    .pipe(dest('build/'));
}

function buildStyles() {
  return src('src/styles/*.css')
    .pipe(postcss([
      autoprefixer(),
      cssnano()
    ]))
    .pipe(dest('build/styles/'));
}

function buildScripts() {
  return src('src/scripts/**/*.js')
    .pipe(uglify())
    .pipe(dest('build/scripts/'));
}

function buildAssets() {
  return src('src/assets/**/*')
    .pipe(imagemin())
    .pipe(dest('build/assets/'));
}

// Отслеживание
function watchFiles() {
  watch('src/pages/*.html', buildPages);
  watch('src/styles/*.css', buildStyles);
  watch('src/scripts/**/*.js', buildScripts);
  watch(['src/assets/**/*.*', 'src/assets/img/**/*.*'], buildAssets);
}

exports.default =
  series (
    clearBuild,
      parallel(
        devServer,
        series(
          parallel(clearBuild,buildPages, buildStyles, buildScripts, buildAssets,),
          watchFiles
        )
    )
  );