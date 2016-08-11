/* global teonet, $scope */

'use strict';
var yeoman = require('yeoman-generator');
//var chalk = require('chalk');
//var yosay = require('yosay');

module.exports = yeoman.Base.extend({

    writing: function () {

      console.log(arguments);
      console.log(arguments[0]);

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
          name_capitalize: this.props.name_capitalize
//          version: this.props.version,
//          description: this.props.description,
//          repository: this.props.repository,
//          author: this.props.author,
//          email: this.props.email,
//          license: this.props.license
        }
      );
    },

    install: function () {
      this.installDependencies();
    }
});
