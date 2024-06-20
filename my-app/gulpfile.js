const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// Пути к файлам
const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'public/css'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'public/js'
  }
};

// Компиляция Sass в CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(concat('main.min.css'))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// Конкатенация и минификация JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

// Отслеживание изменений файлов
function watchFiles() {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  });
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch('public/*.html').on('change', browserSync.reload);
}

// Задача по умолчанию
exports.default = gulp.series(
  gulp.parallel(styles, scripts),
  watchFiles
);

// Экспорт задач для использования отдельно
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchFiles;
