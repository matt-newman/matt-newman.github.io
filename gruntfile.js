module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['!src/js/lib/**','src/js/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false,
                }
            },
            sass: {
                files: 'src/sass/**',
                tasks: ['sass', 'postcss', 'cssmin'],
                options: {
                    livereload: true,
                    spawn: false,
                }
            },
            images: {
                files: ['src/img/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
                options: {
                    livereload: true,
                    spawn: false
                }
            }
        },
        copy: {
            main: {
                files: [
                    // copies js lib files to dest folder
                    {
                        expand: true,
                        cwd: 'src/js/lib',
                        src: ['*.js'],
                        dest: 'target/js/lib',
                        filter: 'isFile'
                    }
                ],
            },
        },
        jshint: {
            files: ['gruntfile.js', 'src/js/main.js'],
            options: {
                jshintrc: '.jshintrc',
                globals: {
                    jQuery: true,
                    Modernizr: true
                }
            }
        },
        sass: {
            dest: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: {
                    'src/css/main.css': 'src/sass/build.scss' // 'destination': 'source'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'src/css/main.css'
            }
        },
        uglify: {
            options: {
                mangle: {
                    except: ['jQuery']
                }
            },
            mainjs: {
                options: {
                    sourceMap: 'target/main.min.js.map'
                },
                files: {
                    'target/js/main.min.js': ['src/js/main.js'],
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    "target/css/main.min.css": ['src/vendor/css/normalize.css', 'src/css/main.css']
                }
            }
        },
        imagemin: {
            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'src/img/', // Src matches are relative to this path
                    src: ['*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'target/img/' // Destination path prefix
                }]
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: '.'
                }
            },
            test: {
                options: {
                    port: 9002,
                    base: '.'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');    

    grunt.registerTask('default', ['copy', 'jshint', 'sass', 'uglify', 'postcss', 'cssmin', 'imagemin']);
    grunt.registerTask('server', ['default', 'connect:server:keepalive']);
};