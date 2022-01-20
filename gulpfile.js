const { src, dest }  = require("gulp")
const minify = require("gulp-minify")

const minifyjs = () => src('src/diff.js', { allowEmpty: true }) 
        .pipe(minify({noSource: true, preserveComments: "some"}))
        .pipe(dest('dest/'))

exports.default = minifyjs