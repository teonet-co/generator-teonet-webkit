# Teonet node-webkit application generator [![NPM version][npm-image]][npm-url] 

Yeoman generator to create new Teonet server node-webkit application. The 
Teonet Server application can execute under Linux or Mac OS only. This readme 
file shows terminal commands for Debian, Ubuntu or Linux Mint.

## Installation

First, install [Yeoman](http://yeoman.io), generator-teonet-webkit using [npm](https://www.npmjs.com/) 
and [NWJS](http://nwjs.io/) 
(we assume you have pre-installed [NodeJS and Build Essential](https://www.npmjs.com/package/generator-teonet-node#dependences)).

```bash
npm install -g yo
npm install -g generator-teonet-webkit
```

### Install teonet library

https://www.npmjs.com/package/generator-teonet#install-teonet-library


## Generate your new teonet-webkit project

```bash
yo teonet-webkit
```

## Compile your application with grunt

```bash
grunt
```

## Run you application with [NWJS](http://nwjs.io/) application

```bash
nw dist --enable-logging=stderr APPNAME teo-APPNAME
```

## Build your webkit application

```bash
grunt build-nwjs
```

## Run your webkit application executable file

```bash
build-nwjs/teo-nw/linux64/APPNAME --enable-logging=stderr APPNAME teo-APPNAME
```

<br>

## Developer Notes

### Some Teonet documentation
  
Teonet developer documentation:  
http://repo.ksproject.org/docs/teonet/
  
Teonet events:  
http://repo.ksproject.org/docs/teonet/ev__mgr_8h.html#ad7b9bff24cb809ad64c305b3ec3a21fe


#### Publish project to NPM

If you haven't already set your NPM author info, now you should:

    npm set init.author.name "Your Name"
    npm set init.author.email "you@example.com"
    npm set init.author.url "http://yourblog.com"
    
    npm adduser

Publish project to NPM:

    npm publish ./


## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

Apache-2.0 © [Kirill Scherba](https://gitlab.ksproject.org)


[npm-image]: https://badge.fury.io/js/generator-teonet-webkit.svg
[npm-url]: https://npmjs.org/package/generator-teonet-webkit
[travis-image]: https://travis-ci.org//generator-teonet-webkit.svg?branch=master
[travis-url]: https://travis-ci.org//generator-teonet-webkit
[daviddm-image]: https://david-dm.org//generator-teonet-webkit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-teonet-webkit
[coveralls-image]: https://coveralls.io/repos//generator-teonet-webkit/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-teonet-webkit
