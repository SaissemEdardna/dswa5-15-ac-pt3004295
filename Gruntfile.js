module.exports = function(grunt) {

    grunt.initConfig({
        copy : {
            project: {
                expand : true,
                cwd : '.',
                src : ['**', '!Gruntfile.js', '!package.json', '!public/bower.json'],
                dest : 'dist'
            }
        },
        clean : {
            dist : {
                src : 'dist'
            }
        },
        usemin : {
            html : 'dist/app/views/**/*.ejs'
        },
        useminPrepare : {
            options : {
                root: 'dist/public',
                dest: 'dist/public'
            },
            html : 'dist/app/views/**/*.ejs'
        },
        ngAnnotate: {
            scripts: {
                expand: true,
                src: ['dist/public/js/**/*.js']
            }
        }
    });
    grunt.registerTask('dist', ['clean','copy']);
    grunt.registerTask('minifica', ['useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
    grunt.registerTask('default', ['dist', 'minifica']);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-usemin');
}