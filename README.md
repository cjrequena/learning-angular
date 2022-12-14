# learning-angular
Learning Angular

The sample projects on this repository are implemented following the Youtube course [Complete Angular 13 Course Step by Step](https://www.youtube.com/playlist?list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty) from [procademy](https://www.youtube.com/c/procademyn)


# Table of Contents
0. [Angular Basics](#angular-basics)  
    0.1 [Install Node](#install-node)   
    0.2 [Install Angular-CLI](#install-angular-cli)     
    0.3 [Create a new project](#create-a-new-project)   
    0.4 [Run a project](#run-a-project)
1. [Angular Components](#angular-compoents)     
    1.1 [Angular Components Overview](#angular-components-overview)     
    1.2 [What is a Component](#what-is-a-component)     
2. [Angular Data Bindings](#angular-data-bindings)      
    2.1 [Angular Binding Syntax](#angular-binding-syntax)        
    2.2 [What is a Data Binding](#what-is a-data-binding)          
3. [Angular Directives](#angular-directives)        
    3.1 [Angular Built-in Directives](#angular-built-in-directives)      
    3.2 [What are Directives](#what-are-directives)     
4. [Angular Template Reference Variables](#angular-template-reference-variables)                
    4.1 [Understanding template variables](#understanding-template-variables)       
    4.2 [What are Template Reference Variables](#what-are-template-reference-variables)     
5. [Angular ViewChild](#angular-viewchild)      
    5.1 [ViewChild](#viewchild)     
    5.2 [ViewChild in Angular](#viewchild-in-angular)       
6. [Angular View Encapsulation](#angular-view-encapsulation)        
    6.1 [View Encapsulation](#view-encapsulation)       
    6.2 [What is View Encapsulation](#what-is-view-encapsulation)       
    
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
* --dry-run: See which files would be created, but don???t actually do anything.
* --verbose: Be more chatty.
* --skip-install: Don???t npm install, useful when offline or with slow internet.
* --skip-tests: Don???t create spec files.
* --skip-git: Don???t initialize a git repo.
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

# Angular Components
## [Angular Components Overview](https://angular.io/guide/component-overview)
## [What is a Component](https://youtu.be/dP9RzPBcnqA)

# Angular Data Bindings
## [Angular Binding Syntax](https://angular.io/guide/binding-syntax)
## [What is a Data Binding](https://youtu.be/r8U2DVRArdY)

# Angular Directives        
## [Angular Built-in Directives](https://angular.io/guide/built-in-directives)      
## [What are Directives](https://www.youtube.com/watch?v=Xc58hRwsvR8&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=19&ab_channel=procademy)     

# Angular Template Reference Variables
## [Understanding template variables](https://angular.io/guide/template-reference-variables)
## [What are Template Reference Variables](https://youtu.be/af_Lw_gEHRw)

# Angular ViewChild     
## [ViewChild](https://angular.io/api/core/ViewChild#viewchild)     
## [ViewChild in Angular](https://youtu.be/tPYGJM1-qkk)     

# Angular View Encapsulation
## [View Encapsulation](https://angular.io/guide/view-encapsulation)
## [What is View Encapsulation](https://youtu.be/X-1TBjBx6pc)

# Angular Content Projection ng-content
## [Content Projection](https://angular.io/guide/content-projection)
## [What is ng-content](https://youtu.be/1Gkiq1u2aQc)

# Angular Lifecycle Hooks
## [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)
## [What are Lifecycle Hooks](https://youtu.be/jFk9-zV27BE)
## [Angular Lifecycle Hook in Action ](https://youtu.be/0Ywak7Ppszw)

# Angular ContentChild
## [ContentChild](https://youtu.be/O8UxAgcF-ks)

# Angular Custom Directives
## [Custom Attribute Directive](https://youtu.be/DxfAEhdOl_0)
## [How Structural Directive Works](https://youtu.be/xP86a-ZtIuE)
## [Custom Structural Directive](https://youtu.be/4ldr69qHY8M)

# Angular ng-template
## []()

# Angular Services
## [Services in Angular](https://www.youtube.com/watch?v=1zLfEqImGLI&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=46)
## [Creating a Service](https://youtu.be/cZV3_9oE8to)
## [Dependency injection in Angular ](https://youtu.be/_8bz4FTNAV4)
## [Hierarchical Injection in Angular ](https://youtu.be/LKnN9PhvxOU)
## [Creating a Data Service](https://youtu.be/fpDgrktYb5M)
## [Injecting Service into another Service](https://youtu.be/v6hLg-YnMj4)

# Angular Observables
## [What is Observable](https://www.youtube.com/watch?v=V4iMyVnQPqM&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=53&ab_channel=procademy)

# Angular Routing
## [What is Routing in Angular](https://www.youtube.com/watch?v=OMX6Wcx2yZA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=59&ab_channel=procademy)
## [Implement Page not found Route](https://www.youtube.com/watch?v=mmappaGCZ2s&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=60&ab_channel=procademy)
## [Configuring navigation links for Route](https://www.youtube.com/watch?v=7YLXCqT_EDc&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=61)
## [Styling Active link using routerLinkActive](https://www.youtube.com/watch?v=n3lisFV1aN4&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=62&ab_channel=procademy)
## [Absolute and Relative Route Paths](https://www.youtube.com/watch?v=qnTm0mk1R0Y&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=63&t=302s&ab_channel=procademy)
## [Navigate between Routes Programmatically ](https://www.youtube.com/watch?v=H-1Pb9zXmkY&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=63&ab_channel=procademy)
## [Passing Parameters to Route](https://www.youtube.com/watch?v=5k2ZUhMh6tA&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=65&t=653s&ab_channel=procademy)
## [Passing Fragments to Route](https://www.youtube.com/watch?v=Yg7YsoW3QVk&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=67&t=1s&ab_channel=procademy)
## [What is Child Routes in Angular](https://www.youtube.com/watch?v=8jDKknEXh3g&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=69&t=1s&ab_channel=procademy)
## [Creating a Route Module File](https://www.youtube.com/watch?v=4fP8YR_BG4Q&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=69&ab_channel=procademy)
## [What is Route Guard in Angular](https://www.youtube.com/watch?v=H-o7S8_NGdI&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=70&ab_channel=procademy)
## []()
## []()
## []()

