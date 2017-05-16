// Подключение библиотек для InSales uploader
var gulp = require('gulp');
var insalesUp = require('insales-uploader');
var watch = require('gulp-watch');

// Настройки для InSales uploader
var options = {
  account: {
    id: '61d18b6819951ded26492e1af86a813f',
    token: 'f30324304e4f50726b382ab556264862',
    url: 'wadge.ru',
    http: true
  },
  theme: {
    id: '807923',
    root: 'theme',
    update: true,
    excludeFiles: ['**/*.DS_Store', '**/*.log'],
    startBackup: true
  },
  tools:{
    debugMode: false,
    openBrowser: {
      start: true,
      app: 'chrome'
    },
    browserSync: {
      start: false,
      uploadRestart: false,
      browser: 'chrome'
    },
    autoprefixer: {
      use: true,
      config: {
          browsers: ['last 21 versions'],
          cascade: true
      }
    },
    eslint: {
      use: true,
      stopOnFail: true
    },
    stylelint: {
      use: true,
      stopOnFail: true,
      config: {
        "rules": {
          "property-no-unknown": true
        }
      }
    }
  }
}

// Инициализация InSales uploader
var InsalesUploader = new insalesUp(options)

// Пример задачи для скачивания темы.
gulp.task('download', function(){
  return InsalesUploader.download()
});

// Задача запускает загрузку файлов на сервер.
gulp.task('upload', function(){
  return InsalesUploader.upload({
    update: true
  })
});

// Загрузка темы на компьютер. Перед началом загрузки, все локальные файлы удаляются
gulp.task('pull', function(){
  return InsalesUploader.pullTheme()
});

// Загрузка темы на сервер с полным обновлением файлов. 
gulp.task('push', function(){
  return InsalesUploader.pushTheme()
});

// Задача запускает создание резервной копии с созданием архива.
gulp.task('backup', function(){
  return InsalesUploader.backup()
});

// Задача запускает отслеживание изменений в файлах.
gulp.task('stream', ['watchDev'], function(){
  return InsalesUploader.stream()
});

// Задача запускает отслеживание изменений в файлах с помощью пакета gulp-watch
gulp.task('watch', function(){
  return watch(InsalesUploader.paths.toWatch, function (_vinyl) {
    InsalesUploader.triggerFile(_vinyl.event, _vinyl.path);
  });
});

// Задача запускает сортировку аcсетов из папки media в папку assets
gulp.task('init-assets', function(){
  return InsalesUploader.initAssets()
});

// Задача запускает сравнивание списка файлов на сервере со списком в локальной копии
gulp.task('diff-assets', function(){
  return InsalesUploader.diffLocalAssets()
});

// Задача запускает открытие браузера
gulp.task('open-browser', function(){
  return InsalesUploader.openBrowser()
});

// Пример задачи поумолчанию, сначала запускается скачивание, после чего запускаем отслеживание изменений.
gulp.task('default', ['download'], function() {
  return gulp.start('stream');
});

// Автоматизация src
var sass         = require('gulp-sass'),
    browserSync  = require('browser-sync').create(),
    browserReload  = browserSync.reload,
    bs           = require('browser-sync'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    cssnano      = require('gulp-cssnano'),
    rename       = require('gulp-rename'),
    del          = require('del'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps   = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('theme/media'))
});

gulp.task('styleLib', function() {
  return gulp.src([
    'src/libs/slick-carousel/slick/slick.css',
    'src/libs/slick-carousel/slick/slick-theme.css',
    'src/libs/swiper/swiper.min.css',
  ])
    .pipe(concat('libs.css'))
    .pipe(gulp.dest('theme/media'));
});

gulp.task('scriptsLib', function() {
  return gulp.src([
//    'src/libs/jquery/dist/jquery.min.js',
    'src/libs/slick-carousel/slick/slick.min.js',
//    'src/libs/jquery.maskedinput/dist/jquery.maskedinput.js',
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('theme/media'));
});

gulp.task('scripts', function() {
  return gulp.src([
    'src/js/script.js',
    'src/js/templates/*.js',
  ])
    .pipe(gulp.dest('theme/media'));
});

gulp.task('serveReload', function() {
  browserReload
});

gulp.task('fonts', function() {
  return gulp.src([
    'src/fonts/*.woff',
    'src/fonts/*.woff2',
  ])
    .pipe(gulp.dest('theme/media'));
});

gulp.task('clean', function() {
  return del.sync('theme/media');
});

gulp.task('clear', function() {
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('src/img/**/*')
  .pipe(cache(imagemin({
    interlaced: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  })))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('watchDev', ['scriptsLib', 'styleLib', 'fonts'], function() {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['scripts']);
});