module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      all: {
        options: {
          preserveComments: false
        },
        files: {
          'tinycon.min.js': ['tinycon.js']
        }
      },
    },
  });
};
