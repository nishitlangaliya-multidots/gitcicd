module.exports = function(grunt) {

  grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     fileExists: {
      scripts: ['index.php']
    },
    xml_validator: {
      target: {
        src: ['wp-sitemap.xml','*.xml']
      }
    },
    mysql_query: {
      dev1: {
          host: "localhost",
          user: "root",
          pass: "root",
          database: "local",
          query: "SELECT * FROM `wp_options` WHERE (`option_name` = 'blog_public' OR `option_value` = 'blog_public' OR `autoload` = 'blog_public') LIMIT 50"
      },
   },
     jshint: {
        // define the files to lint
        files: ['Gruntfile.js', 'src/**/*.js'],
        // configure JSHint
        options: {
           // more options here if you want to override JSHint defaults
           globals: {
              jQuery: true,
           }
        }
     },
     http: {
      your_service: {
        options: {
          url: 'http://cicd.local/robots.txt',
        },
        dest: 'robots.txt'
      }
    },
     watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
     }
  });
  

  //grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-file-exists');
  grunt.loadNpmTasks('grunt-xml-validator');
  grunt.loadNpmTasks('grunt-mysql-query');
  grunt.loadNpmTasks('grunt-http');




//  grunt.loadNpmTasks('grunt-contrib-watch');
  //grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', ['jshint', 'fileExists','xml_validator','http']);

};