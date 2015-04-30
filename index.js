#!/usr/bin/env node
var fs = require('fs');
var mkdirp = require('mkdirp');
var writefile = require('writefile');
var ncp = require('ncp').ncp;
var cpr = require('cpr');
var argv = require('yargs').usage('Usage: --proj "myApp" --user "Joe" --app "~/Documents/myWebApp" --icons "~/Documents/myWebApp_Icons').demand(['proj', 'user']).argv;
var templates = require('./templates.js');
var appPath = process.env.HOME + '/Desktop/';
var user = argv.user;
var app = argv.app;
var icons = argv.icons;

var noop = function() {};


/////////////////////////////////////////////////////////
// Define function to create directories and write files:
/////////////////////////////////////////////////////////
var createProject = function() {
  mkdirp(appPath + argv.proj, function(err){});
  mkdirp(appPath + argv.proj + '/' + argv.proj + '.xcodeproj', function (err) {});
  mkdirp(appPath + argv.proj + '/'  + argv.proj + '.xcodeproj/project.xcworkspace', function (err) {});

  mkdirp(appPath + argv.proj + '/' + argv.proj + '/' + '/Base.lproj/');

  // Create Swift files and Info.plist
  writefile(appPath + argv.proj + '/'  + argv.proj + '/AppDelegate.swift', templates.appDelegate, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '/ViewController.swift', templates.viewController, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '/Info.plist', templates.infoPlist, function(err) {});

  // Create Base.lproj files: templates.launchScreen, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '/Base.lproj/Main.storyboard', templates.mainStoryboard, noop);

  // Create AppIcon Contents file:
  if (icons) {
    cpr(icons, appPath + argv.proj + '/'  + argv.proj + '/Images.xcassets/', noop);

  } else {
    cpr(__dirname + '/icons/', appPath + argv.proj + '/'  + argv.proj + '/Images.xcassets/', function(err) { console.log(err)});
  }
  // Write JSON files for icons and launch images:
  writefile(appPath + argv.proj + '/'  + argv.proj + '/Images.xcassets/AppIcon.appiconset/Contents.json', templates.appiconset, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '/Images.xcassets/iTunesArtwork.imageset/Contents.json', templates.itunesartwork, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '/Images.xcassets/LaunchImage.launchimage/Contents.json', templates.launchimages, noop);

  // Create xcuserdata files:
  writefile(appPath + argv.proj + '/'  + argv.proj + '.xcodeproj/xcuserdata/xcschemes/' + argv.proj + '.xcscheme', templates.xcscheme, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '.xcodeproj/xcuserdata/xcschemes/xcschememanagement.plist', templates.xcschememanagement, noop);
  writefile(appPath + argv.proj + '/'  + argv.proj + '.xcodeproj/xcuserdata/contents.xcworkspacedata', templates.xcworkspacedata, noop);

  // Create pbxproj file:
  writefile(appPath + argv.proj + '/'  + argv.proj + '.xcodeproj/project.pbxproj', templates.pbxproj, noop);

  // Create the Website index file:
  writefile(appPath + argv.proj + '/Website/index.html', templates.html, noop);

  // Create tests:
  writefile(appPath + argv.proj + '/' + argv.proj + 'Tests/' + argv.proj + 'Tests.swift', templates.testsSwift, noop);
  writefile(appPath + argv.proj + '/' + argv.proj + 'Tests/Info.plist', templates.testsPlist, noop);

  // Check to see if user provided
  // a path to a Web app:
  if (app) {
    ncp.limit = 16;
    ncp(app, appPath + argv.proj + '/Website/', noop);
  } 
  console.log('The project was successfully created. You may now open it in Xcode.')
}


////////////////////////////////////////////////////////
// Check initial parameter values before making project:
////////////////////////////////////////////////////////
if (argv.proj) {

  // Check to see if the folder exists:
  fs.exists(appPath + argv.proj, function(exists) {

    // If it does not exist, create it:
    if (!exists) {
      createProject();
    } else {
      console.log('ATTENTION: This project already exists. Change your project\'s name or delete the old one.')
    }
  });
}