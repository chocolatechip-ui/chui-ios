# chui-ios

This is a node command-line tool that enables you to create a hybrid app container for your ChocolateChip-UI app that opens in Xcode and runs on iOS. It will wrap your Web app in a <a href="https://developer.apple.com/swift/" target="_blank">Swift</a> Web view. It expects the following parameters:

##Installation

To install on Mac OS X, open your terminal and type:

```
sudo npm install -g chui-ios
```

This will make this a global command-line tool, making it available regardless of where you are.

##Usage

It expects the following parameters:

- proj (the name of your project)
- username (your username on your computer)
- chuiapp (path to an existing ChUI Web app, otherwise it will create a default html page)
- appicons (path of icons for the hybrid path)

Both `--chuiapp` and `--appicons` are optional arguments. If you do not provide a path to a ChocolateChip-UI Web app for the `--chuiapp` argument, the Xcode project will be created with a default Web page. You can always drag and drop your ChococolateChip-UI app's resources to the project's Website folder later. Just make sure you app's file name is `index.html`. You will be replacing the default index.html file in the project.

The command is used as follows:

    chui-ios --proj "Hamburger" --username "BongoBaby" --chuiapp /Users/bongobaby/Documents/hamburger --appicons /Users/bongobaby/Desktop/hambuger-icons


By default it outputs the resulting Xcode project to your desktop. If there is already a folder with the same name, the script will abort with a warning asking you to either delete the existing folder on the desktop, or change the name of the project you are trying to create. 

You can add the path for the ChocolateChip-UI Web app you wish to convert into a hybrid app by dragging its folder onto the terminal with a space after the argument `--chuiapp`. This will put its contents into the `Website` folder of the hybrid app. Similarly, if you have icons, iTunes artwork and launch screens ready, you can drag the folder with them after the argument with a space: `--appicons`. If you do not provide a path for app icons, the command will create an Xcode project where the icons are missing. Xcode will alert you with warning messages about the missing icons, however this will not impede the ability to build the app and deloy to an iOS capable device for testing. 

If you want to add icons through the script, make sure they are named as follows and have these resolutions/dimensions.

App Icons:

- `AppIcon-29@2x.png` (Resolution: 58x58)
- `AppIcon-29@3x.png` (Resolution: 87x87)
- `AppIcon-40@2x.png` (Resolution: 80x80)
- `AppIcon-40@3x.png` (Resolution: 120x120)
- `AppIcon-60@2x.png` (Resolution: 120x120)
- `AppIcon-60@3x.png` (Resolution: 180x180)

iTunes Artwork:

- `iTunesArtwork.png` (Resolution: 512x512)
- `iTunesArtwork@2x.png` (Resolution: 1024x1024)
- `iTunesArtwork@2x.png` (Resolution: 1536x1536)

Launch Images:

- `LaunchImage~iphone.png` (Resolution: 320x480)
- `LaunchImage@2x~iphone.png` (Resolution: 640x960)
- `LaunchImage-568h@2x~iphone.png` (Resolution: 640x1136)
- `LaunchImage-667h@2x~iphone.png` (Resolution: 750x1334)
- `LaunchImage-736h@3x~iphone.png` (Resolution: 1242x2208)

If you create a hybrid app without adding your own custom icons, the module will create your project with default icons. You can replace these later by dragging your custom icons into the appropriate subfolders in the `Images.xcassets` folder of your project. Make sure to use the same naming convention and image dimensions presented above.

If you want to support older devices or iPads, you'll need to change that in the General tab of your project for Deployment Target and Devices. If you do so, you'll also need to switch to the Images.xcassets file in the side column and add icon slots for their icons, which of course you will also need to create and add to your project. Otherwise, when you build you will see yellow warnings about missing icons. If these appear, you can still build and deploy your app to devices for testing, but the icons for the new devices will not appear. Also, if you are missing icons, your app will be rejected during the review process by Apple. So you will need to provide them. 



