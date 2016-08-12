/* global teonet, $scope */

'use strict';
var yeoman = require('yeoman-generator');
//var chalk = require('chalk');
//var yosay = require('yosay');
var angularUtils = require('../util.js');

module.exports = yeoman.Base.extend({

    addScriptToIndex: function (script) {
        try {
//          var appPath = this.destinationPath('./app/'); //this.env.options.appPath;
//          var fullPath = path.join(appPath, 'index.html');
          var fullPath = 'app/index.html'; // this.destinationPath('./app/index.html');
          this.log('addScriptToIndex fullPath: ' + fullPath);
          angularUtils.rewriteFile({
            file: fullPath,
            needle: '<!-- endbuild -->',
            splicable: [
              '<script src="scripts/controllers/' + script.toLowerCase().replace(/\\/g, '/') + '.js"></script>'
            ]
          });
        } catch (e) {
          this.log.error(chalk.yellow(
            '\nUnable to find ' + fullPath + '. Reference to ' + script + '.js ' + 'not added.\n'
          ));
        }
    },

    writing: function () {

      //console.log(arguments);
      //console.log(arguments[0]);

      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };

      this.props = {};
      this.props.name = arguments[0].toLowerCase();
      this.props.name_capitalize = capitalize(this.props.name);

      this.fs.copyTpl(
        this.templatePath('./app/scripts/controllers/controller.js'),
        this.destinationPath('./app/scripts/controllers/' + this.props.name + '.js'), {
          name: this.props.name,
          name_capitalize: this.props.name_capitalize.replace('-', '')
        }
      );

      this.fs.copyTpl(
        this.templatePath('./test/spec/controllers/controller.js.txt'),
        this.destinationPath('./test/spec/controllers/' + this.props.name + '.js'), {
          name: this.props.name,
          name_capitalize: this.props.name_capitalize.replace('-', '')
        }
      );

      this.addScriptToIndex(this.props.name);

    },

    install: function () {
      this.installDependencies();
    }
});
