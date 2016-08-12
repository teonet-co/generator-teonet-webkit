'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the extraordinary ' + chalk.red('TEONET-WEBKIT-APPLICATION') + ' generator!'
    ));

    //Get array of inputs from the user
    var prompts = [
    {
        type: 'input',
        name: 'name',
        message: 'What would you love to name this project (lowercase name of application executable file)?',
        default: 'teowk', //this.appname
        store: true    
    },
    {
        type: 'input',
        name: 'version',
        message: 'This project version',
        default: "0.0.1",
        store: true
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe the project',
        default: "Teonet server node webkit"
    },
    {
        type: 'input',
        name: 'repository',
        message: 'What is the project\'s repository?',
        default: "No repository yet"
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author name',
        default: "Application Author",
        store: true
    },
    {
        type: 'input',
        name: 'email',
        message: 'Author email',
        default: "email@example.com",
        store: true
    },
    {
        type: 'input',
        name: 'license',
        message: 'How would you love to license the project?',
        default: "Apache-2.0",
        store: true
    }];

    return this.prompt(prompts).then(function (props) {
        
      function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
        
      // To access props later use this.props.someAnswer;
      this.props = props;
      this.props.name_capitalize = capitalize(this.props.name);
    }.bind(this));
  },

  writing: function () {
      
    this.fs.copy(
      this.templatePath('./'),
      this.destinationPath('./')
    );
    
    this.fs.copy(
      this.templatePath('./.*'),
      this.destinationPath('./')
    );
    
    this.fs.copy(
      this.templatePath('./test/.*'),
      this.destinationPath('./test/')
    );
    
    this.fs.copyTpl(
      this.templatePath('./package.json'),
      this.destinationPath('./package.json'), {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        repository: this.props.repository,
        author: this.props.author,
        email: this.props.email,
        license: this.props.license
      }
    );
    
    this.fs.copyTpl(
      this.templatePath('./app/_package.json'),
      this.destinationPath('./app/package.json'), {
        name: this.props.name,
        version: this.props.version,
        description: this.props.description,
        repository: this.props.repository,
        author: this.props.author,
        email: this.props.email,
        license: this.props.license
      }
    );

    this.fs.copyTpl(
      this.templatePath('./app/scripts/services/teonet.js'),
      this.destinationPath('./app/scripts/services/teonet.js'), {
        name: this.props.name,
        name_capitalize: this.props.name_capitalize,
        version: this.props.version,
        description: this.props.description,
        repository: this.props.repository,
        author: this.props.author,
        email: this.props.email,
        license: this.props.license
      }
    );      
    
    this.fs.copyTpl(
      this.templatePath('./nbproject/project.xml'),
      this.destinationPath('./nbproject/project.xml'), {
        name: this.props.name
      }
    ); 
      
  },

  install: function () {
    this.installDependencies();
  }
});
