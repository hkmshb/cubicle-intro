module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: true,
                    cleancss: true,
                    optimization: 2,
                    strictMath: true,
                    strictUnits: true
                },
                files: {
                    // target.css file : source.less file
                    "cubicle/static/css/cubicle.min.css": "cubicle/static/less/*.less"
                }
            }
        },
        uglify: {
            build: {
                src: "cubicle/static/scripts/*.js",
                dest: "cubicle/static/scripts/*.min.js",
            }
        },
        watch: {
            styles: {
                // which files to watch 
                // (all .less files recursively in the less directory)
                files: [
                    "cubicle/static/less/**/*.less",
                    "cubicle/static/scripts/cubicle.js"
                ],
                tasks: ["less", "uglify"],
                options: {
                    nospawn: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};
