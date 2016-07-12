module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      option: {
        separator: ';'
      },
      dist: {
        src: [
            'client/**/*.js'
        ],
        dest: 'dist/production.js'
      }
    },
  })
}