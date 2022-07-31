# learning-angular
Learning Angular

# Table of Contents
0. [Angular Basics](#angular-basics)  
    0.1 [Install Node](#install-node)   
    0.2 [Install Angular-CLI](#install-angular-cli)     
    0.3 [Create a new project](#create-a-new-project)   
    0.4 [Run a project](#run-a-project)


# Angular Basics

## Install Node
You can install Node.js downloading it from https://nodejs.org/en/ or you can install node using [NVM](http://cjrequena.com/markdowns/docs/cheatsheets/npm-cheatsheet/#install-nvm-node-version-manager)

## Install Angular CLI 
You can install angular-cli following this guide [Angular-CLI](http://cjrequena.com/markdowns/docs/cheatsheets/angular-cli-cheatsheet/)

## Create a new project
To create a new project you have to use the following command [ng new](https://angular.io/cli/new)

```sh
$ ng new my-app
$ ng new my-app --prefix yo --style scss --skip-tests --verbose # An example with a few flags
```
And here are a few flags you can use:
* --dry-run: See which files would be created, but don’t actually do anything.
* --verbose: Be more chatty.
* --skip-install: Don’t npm install, useful when offline or with slow internet.
* --skip-tests: Don’t create spec files.
* --skip-git: Don’t initialize a git repo.
* --source-dir: Name of the source directory
* --routing: Add routing to the app.
* --prefix: Specify the prefix to use for components selectors.
* --style: Defaults to css, but can be set to scss.
* --inline-style: Use inline styles for components instead of separate files.
* --inline-template: Use inline templates for components instead of separate files.

## Run a project
```sh
$ ng s # Serve your project
$ ng s -o # Serve and open in your default browser automatically
$ ng s --port 5555 # Serve to a different port
```