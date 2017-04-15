#!/usr/bin/env node
var program = require('commander');
var init = require('./init-program');
var createBoilerplate = require('./create-boilerplate');

/*
 * Initialise the program
 */
var program = init();

/*
 * Run the program
 */
createBoilerplate('rcc', program);
