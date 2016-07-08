'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: ['sass/{,**/}*.{scss,sass}'],
        tasks: ['scsslint', 'compass:dev'],
        options: {
          livereload: false
        }
      },
      registry: {
        files: ['*.info', '{,**}/*.{php,inc}'],
        tasks: ['shell'],
        options: {
          livereload: false
        }
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: ['css/{,**/}*.css']
      },
      js: {
        files: ['js/{,**/}*.js', '!js/{,**/}*.min.js'],
        tasks: ['jshint']
      }
    },
    scsslint: {
      allFiles: ['sass/custom/*.scss', 'sass/custom/**/*.scss'],
      options: {
        config: 'scss-lint.yml',
        reporterOutput: 'scss-lint-report.xml',
        colorizeOutput: true
      }
    },
    
    shell: {
      all: {
        command: 'drush cache-clear theme-registry'
      }
    },
    
    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        force: true
      },
      dist: {
        options: {
          environment: 'production'
        }
      },
      dev: {
        options: {
          environment: 'development'
        }
      }
    },

    jshint: {
      options: {
        jshintrc: 'jshintrc'
      },
      all: ['js/custom/*.js', '!js/custom/*.min.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-scss-lint');
  // Default tasks.
  grunt.registerTask('default', 'watch');
  grunt.registerTask('build', [
    'compass:dist',
    'jshint',
    'scsslint'
  ]);
};
