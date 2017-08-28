module.exports = function(grunt) {

  // Project configuration.
grunt.initConfig({
        watch: {
            files: 'sass/*.scss',
            tasks: ['sass']
        },
        sass: {
            dev: {
                files: {
                    'css/main.css': 'sass/main.scss'
                }
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'css/*.css',
                        '/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // define default task
    grunt.registerTask('default', ['browserSync', 'watch']);
    grunt.registerTask('project', ['browserSync', 'watch']);
};