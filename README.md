## Prerequisites

* PHP 8.0+
* [Composer](https://getcomposer.org/download/)
* [WordPress 6.4+](https://wordpress.org/download/releases/)

## Installation
* Clone this repository into your WordPress plugins directory.
* ```cd path/to/your/wp-content/plugins/literati-example```
Navigate to the plugin directory
* ```make install```
This will install the composer and npm dependencies

## Final Deliverable details

1.  Created a new Promotion post type that includes 4 fields:
    * Header
    * Text
    * Button
    * Image

2.  Implemented a Carousel Gutenberg block
    * The block has a field to define the transition timer (how many seconds between moving to the next item)
    * The carousel has display published Promotion content types
    * The carousel has auto transition between the attached promotions on the defined timer


## Repo Setup
This Plugin repo follows a structure similar to some of our custom plugins used on our various sites.

```
/design-files   This contains any image 
/literati-example  This is the main plugin directory
  - /blocks   This contains block specific code
  - /includes This contains plugin function
  - /tests    This contains any tests
  - composer.json  Composer dependencies for the plugin
  - literati-example.php   The singleton for the plugin
  - package.json   This contains npm dependencies, including wp-scripts for building the blocks
composer.json  These are composer dependencies used outside of the plugin, such as phpunit
Makefile   Commands
phpcs.xml   Test configuration
phpunit.xml   Test Configuration
```

## Available Commands
All make commands are available from the root directory

```make install```
This will install the composer and npm dependencies

```make test```
This will run phpunit

```make build```
This will run any build tasks required for deploy

```make release```
This will build and package a zip file for the plugin that can be uploaded to a WordPress instance
