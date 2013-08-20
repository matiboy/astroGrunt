/*
 * grunt-astro
 * https://github.com/matiboy/astroGrunt
 *
 * Copyright (c) 2013 Matiboy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var htmlparser = require('htmlparser');
  
  grunt.log.writeln('Start');
  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('astro', 'Grunt plugin to parse astro json files', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      punctuation: '.',
      separator: ', '
    });

    // Iterate over all specified file groups.
    this.files.forEach(function(file) {
      var json = grunt.file.readJSON(file.src);
      var htmlfile = file.src.replace('.json', '.html');
      var rawHtml = grunt.file.read(htmlfile);
      var handler = new htmlparser.DefaultHandler(function (error, dom) {
        if (error)
          console.log('ARGH!');
        else
          console.log(dom);
      });
      var parser = new htmlparser.Parser(handler);
      parser.parseComplete(rawHtml);
      if(json.footer) {

      }
      return;
    });
  });
};
