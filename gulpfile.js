const del = require('del');
const autoPrefixer = require('gulp-autoprefixer');
const fileinclude = require('gulp-file-include');

let projectFolder='dist';
let surceFolder='#src';

let path={
    build:{
        html: projectFolder +'/',
        css: projectFolder + '/css/',
        js: projectFolder + '/js/',
        img: projectFolder + '/img/',
        fonts: projectFolder + '/fonts/'
    },

    src: {
        html: [surceFolder + '/*.html', "!" + surceFolder + '/_*.html'],
        css: surceFolder + '/sass/styles.sass',
        js: surceFolder + '/js/script.js',
        img: surceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
        fonts: surceFolder + '/fonts/*.ttf'
    },

    watch: {
        html: surceFolder + '/',
        css: surceFolder + '/sass/**/*.sass',
        js: surceFolder + '/js/**/*.js',
        img: surceFolder + '/img/**/*.{jpg,png,svg,gif,ico,webp}',
    },
    clean:'./'+projectFolder+'/'
}

let {src, dest} = require('gulp');
const gulpWebp = require('gulp-webp');
const svgSprite = require('gulp-svg-sprite');
    gulp = require('gulp');
    browsersync = require("browser-sync").create();
    fileInclude = require("gulp-file-include");
    deletel = require("del");
    sass = require("gulp-sass");
    autoprefixer = require("gulp-autoprefixer");
    groupMedia = require("gulp-group-css-media-queries");
    cleanCss = require("gulp-clean-css");
    renameCss = require("gulp-rename");
    imageMin = require("gulp-imagemin");
    webp = require("gulp-webp");
    webphtml = require("gulp-webp-html");
    webpcss = require("gulp-webpcss");
    svgSprites = require("gulp-svg-sprite");


function browserSync(params){
    browsersync.init({
        server:{
            baseDir: './' + projectFolder + '/'
        },
        port:3000,
        notify: false
    })
}

function html(){
    return src(path.src.html)
        .pipe(fileInclude())
        .pipe(webphtml())
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

gulp.task('svgSprite', function(){
    return gulp.src([surceFolder + '/iconsprite/*.svg'])
    .pipe(svgSprites({
        mode: {
            stack: {
                sprite:"../icons/icons.svg",
            }
        }
    }
    ))
    .pipe(dest(path.build.html))
})

function images() {
    return src(path.src.img)
        .pipe(webp({
            quality: 90
        }))
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(
            imageMin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                interlaced: true,
                optimizationLevel: 3 //0 to 7
        }))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function js() {
    return src(path.src.js)
        .pipe(fileInclude())
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(sass({
            outputStyle: "expanded"
        }))
        .pipe(
            groupMedia()
        )
        .pipe(
            autoprefixer({
                overrideBrowserList: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(webpcss())
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream())
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);

}

function clean(params){
    return deletel(path.clean);
}

let build = gulp.series(clean, gulp.parallel(js,css, images, html));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;