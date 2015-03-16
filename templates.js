var argv = require('yargs').argv;
var username = argv.username || "joe";

exports.appDelegate = "//\n\
//  AppDelegate.swift\n\
//  " + argv.proj + "\n\
//\n\
//  Created by " + username + " on 2/15/15.\n\
//  Copyright (c) 2015 " + username + ". All rights reserved.\n\
//\n\
\n\
import UIKit\n\
\n\
@UIApplicationMain\n\
class AppDelegate: UIResponder, UIApplicationDelegate {\n\
\n\
    var window: UIWindow?\n\
\n\
    func applicationWillResignActive(application: UIApplication) {\n\
        // Sent when the application is about to move from active to inactive state. This can occur for certain types of temporary interruptions (such as an incoming phone call or SMS message) or when the user quits the application and it begins the transition to the background state.\n\
        // Use this method to pause ongoing tasks, disable timers, and throttle down OpenGL ES frame rates. Games should use this method to pause the game.\n\
    }\n\
\n\
    func applicationDidEnterBackground(application: UIApplication) {\n\
        // Use this method to release shared resources, save user data, invalidate timers, and store enough application state information to restore your application to its current state in case it is terminated later.\n\
        // If your application supports background execution, this method is called instead of applicationWillTerminate: when the user quits.\n\
    }\n\
\n\
    func applicationWillEnterForeground(application: UIApplication) {\n\
        // Called as part of the transition from the background to the inactive state; here you can undo many of the changes made on entering the background.\n\
    }\n\
\n\
    func applicationDidBecomeActive(application: UIApplication) {\n\
        // Restart any tasks that were paused (or not yet started) while the application was inactive. If the application was previously in the background, optionally refresh the user interface.\n\
    }\n\
\n\
    func applicationWillTerminate(application: UIApplication) {\n\
        // Called when the application is about to terminate. Save data if appropriate. See also applicationDidEnterBackground:.\n\
    }\n\
}\n\
";

exports.viewController = '//\n\
//  ViewController.swift\n\
//  ' + argv.proj + '\n\
//\n\
//  Created by ' + username + ' on 2/15/15.\n\
//  Copyright (c) 2015 ' + username + '. All rights reserved.\n\
//\n\
\n\
import UIKit\n\
import WebKit\n\
\n\
class ViewController: UIViewController {\n\
    \n\
    @IBOutlet var webView: UIWebView!\n\
    \n\
    override func viewDidLoad() {\n\
        super.viewDidLoad()\n\
        \n\
        // Define location of local HTML file:\n\
        let html = NSBundle.mainBundle().pathForResource("index.html", ofType: "", inDirectory: "Website")\n\
        \n\
        // Create an URL object with the above path:\n\
        let url = NSURL.fileURLWithPath(html!)\n\
        \n\
        // Create a request object with the url object:\n\
        let request = NSURLRequest(URL: url!)\n\
        \n\
        // Tell the Web view to load the url request object:\n\
        self.webView.loadRequest(request)\n\
    }\n\
}\n\
';

exports.infoPlist = '<?xml version="1.0" encoding="UTF-8"?>\n\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n\
<plist version="1.0">\n\
<dict>\n\
  <key>CFBundleDevelopmentRegion</key>\n\
  <string>en</string>\n\
  <key>CFBundleExecutable</key>\n\
  <string>$(EXECUTABLE_NAME)</string>\n\
  <key>CFBundleIdentifier</key>\n\
  <string>' + argv.proj.toLowerCase() + '.$(PRODUCT_NAME:rfc1034identifier)</string>\n\
  <key>CFBundleInfoDictionaryVersion</key>\n\
  <string>6.0</string>\n\
  <key>CFBundleName</key>\n\
  <string>$(PRODUCT_NAME)</string>\n\
  <key>CFBundlePackageType</key>\n\
  <string>APPL</string>\n\
  <key>CFBundleShortVersionString</key>\n\
  <string>1.0</string>\n\
  <key>CFBundleSignature</key>\n\
  <string>????</string>\n\
  <key>CFBundleVersion</key>\n\
  <string>1</string>\n\
  <key>LSRequiresIPhoneOS</key>\n\
  <true/>\n\
  <key>UIMainStoryboardFile</key>\n\
  <string>Main</string>\n\
  <key>UIRequiredDeviceCapabilities</key>\n\
  <array>\n\
    <string>armv7</string>\n\
  </array>\n\
  <key>UISupportedInterfaceOrientations</key>\n\
  <array>\n\
    <string>UIInterfaceOrientationPortrait</string>\n\
    <string>UIInterfaceOrientationLandscapeLeft</string>\n\
    <string>UIInterfaceOrientationLandscapeRight</string>\n\
  </array>\n\
  <key>UISupportedInterfaceOrientations~ipad</key>\n\
  <array>\n\
    <string>UIInterfaceOrientationPortrait</string>\n\
    <string>UIInterfaceOrientationPortraitUpsideDown</string>\n\
    <string>UIInterfaceOrientationLandscapeLeft</string>\n\
    <string>UIInterfaceOrientationLandscapeRight</string>\n\
  </array>\n\
</dict>\n\
</plist>\n\
';

exports.mainStoryboard = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n\
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="6254" systemVersion="14D72i" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" useTraitCollections="YES" initialViewController="BYZ-38-t0r">\n\
    <dependencies>\n\
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="6247"/>\n\
        <capability name="Constraints to layout margins" minToolsVersion="6.0"/>\n\
    </dependencies>\n\
    <scenes>\n\
        <!--View Controller-->\n\
        <scene sceneID="tne-QT-ifu">\n\
            <objects>\n\
                <viewController id="BYZ-38-t0r" customClass="ViewController" customModule="' + argv.proj.toLowerCase() + '" customModuleProvider="target" sceneMemberID="viewController">\n\
                    <layoutGuides>\n\
                        <viewControllerLayoutGuide type="top" id="y3c-jy-aDJ"/>\n\
                        <viewControllerLayoutGuide type="bottom" id="wfy-db-euE"/>\n\
                    </layoutGuides>\n\
                    <view key="view" contentMode="scaleToFill" id="8bC-Xf-vdC">\n\
                        <rect key="frame" x="0.0" y="0.0" width="600" height="600"/>\n\
                        <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>\n\
                        <subviews>\n\
                            <webView contentMode="scaleToFill" translatesAutoresizingMaskIntoConstraints="NO" id="Pv1-7N-j9M">\n\
                                <rect key="frame" x="0.0" y="-20" width="600" height="620"/>\n\
                                <color key="backgroundColor" white="1" alpha="1" colorSpace="calibratedWhite"/>\n\
                                <constraints>\n\
                                    <constraint firstAttribute="width" constant="600" id="7ip-LQ-w7l"/>\n\
                                    <constraint firstAttribute="height" constant="580" id="M7L-H5-Rj5"/>\n\
                                </constraints>\n\
                            </webView>\n\
                        </subviews>\n\
                        <color key="backgroundColor" white="1" alpha="1" colorSpace="custom" customColorSpace="calibratedWhite"/>\n\
                        <constraints>\n\
                            <constraint firstItem="Pv1-7N-j9M" firstAttribute="top" secondItem="8bC-Xf-vdC" secondAttribute="topMargin" constant="20" id="0Yg-Fy-chn"/>\n\
                            <constraint firstAttribute="trailing" secondItem="Pv1-7N-j9M" secondAttribute="trailing" id="HiQ-bu-qj0"/>\n\
                            <constraint firstItem="wfy-db-euE" firstAttribute="top" secondItem="Pv1-7N-j9M" secondAttribute="bottom" id="W5n-MF-Scc"/>\n\
                            <constraint firstItem="Pv1-7N-j9M" firstAttribute="leading" secondItem="8bC-Xf-vdC" secondAttribute="leading" id="uoW-x2-YnU"/>\n\
                            <constraint firstItem="wfy-db-euE" firstAttribute="top" secondItem="Pv1-7N-j9M" secondAttribute="bottom" constant="8" symbolic="YES" id="yPA-NF-heh"/>\n\
                        </constraints>\n\
                    </view>\n\
                    <connections>\n\
                        <outlet property="webView" destination="Pv1-7N-j9M" id="eRG-5t-c21"/>\n\
                    </connections>\n\
                </viewController>\n\
                <placeholder placeholderIdentifier="IBFirstResponder" id="dkx-z0-nzr" sceneMemberID="firstResponder"/>\n\
            </objects>\n\
        </scene>\n\
    </scenes>\n\
</document>';

exports.appiconsetWithoutIcons = '{\n\
  "images" : [\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "29x29",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "29x29",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "40x40",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "iphone",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "size" : "57x57",\n\
      "idiom" : "iphone",\n\
      "filename" : "AppIcon.png",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "57x57",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "60x60",\n\
      "idiom" : "iphone",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "60x60",\n\
      "idiom" : "iphone",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "29x29",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "29x29",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "ipad",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "ipad",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "50x50",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "50x50",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "72x72",\n\
      "idiom" : "ipad",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "72x72",\n\
      "idiom" : "ipad",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "76x76",\n\
      "idiom" : "ipad",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "76x76",\n\
      "idiom" : "ipad",\n\
      "scale" : "2x"\n\
    }\n\
  ],\n\
  "info" : {\n\
    "version" : 1,\n\
    "author" : "xcode"\n\
  }\n\
}';

exports.appiconsetWithIcons = '{\n\
  "images" : [\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "29x29",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "29x29",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "40x40",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "iphone",\n\
      "filename" : "AppIcon-Small-40@3x.png",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "size" : "57x57",\n\
      "idiom" : "iphone",\n\
      "filename" : "AppIcon.png",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "size" : "57x57",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "60x60",\n\
      "idiom" : "iphone",\n\
      "filename" : "AppIcon-60@2x.png",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "60x60",\n\
      "idiom" : "iphone",\n\
      "filename" : "AppIcon-60@3x.png",\n\
      "scale" : "3x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "29x29",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "29x29",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-Small-40.png",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "40x40",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-Small-40@2x.png",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "50x50",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "idiom" : "ipad",\n\
      "size" : "50x50",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "72x72",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-ipad.png",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "72x72",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-ipad@2x.png",\n\
      "scale" : "2x"\n\
    },\n\
    {\n\
      "size" : "76x76",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-76.png",\n\
      "scale" : "1x"\n\
    },\n\
    {\n\
      "size" : "76x76",\n\
      "idiom" : "ipad",\n\
      "filename" : "AppIcon-76@2x.png",\n\
      "scale" : "2x"\n\
    }\n\
  ],\n\
  "info" : {\n\
    "version" : 1,\n\
    "author" : "xcode"\n\
  }\n\
}';

exports.itunesartwork = '{\n\
  "images" : [\n\
    {\n\
      "idiom" : "universal",\n\
      "scale" : "1x",\n\
      "filename" : "iTunesArtwork.png"\n\
    },\n\
    {\n\
      "idiom" : "universal",\n\
      "scale" : "2x",\n\
      "filename" : "iTunesArtwork@2x.png"\n\
    },\n\
    {\n\
      "idiom" : "universal",\n\
      "scale" : "3x"\n\
    }\n\
  ],\n\
  "info" : {\n\
    "version" : 1,\n\
    "author" : "xcode"\n\
  }\n\
}';

exports.launchimages = '{\n\
  "images" : [\n\
    {\n\
      "idiom" : "iphone",\n\
      "scale" : "2x",\n\
      "orientation" : "portrait",\n\
    "extent" : "full-screen",\n\
      "minimum-system-version" : "7.0",\n\
      "subtype" : "retina4",\n\
      "filename" : "LaunchImage-568h@2x~iphone.png"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "scale" : "2x",\n\
      "orientation" : "portrait",\n\
    "extent" : "full-screen",\n\
      "minimum-system-version" : "8.0",\n\
      "subtype" : "667h",\n\
      "filename" : "LaunchImage-667h@2x~iphone.png"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "scale" : "3x",\n\
      "orientation" : "portrait",\n\
    "extent" : "full-screen",\n\
      "minimum-system-version" : "8.0",\n\
      "subtype" : "736h",\n\
      "filename" : "LaunchImage-736h@3x~iphone.png"\n\
    },\n\
    {\n\
      "idiom" : "iphone",\n\
      "scale" : "2x",\n\
      "orientation" : "portrait",\n\
    "extent" : "full-screen",\n\
      "minimum-system-version" : "7.0",\n\
      "filename" : "LaunchImage@2x~iphone.png"\n\
    },\n\
  ],\n\
  "info" : {\n\
    "version" : 1,\n\
    "author" : "xcode"\n\
  }\n\
}';

exports.xcscheme = '<?xml version="1.0" encoding="UTF-8"?>\n\
<Scheme\n\
   LastUpgradeVersion = "0610"\n\
   version = "1.3">\n\
   <BuildAction\n\
      parallelizeBuildables = "YES"\n\
      buildImplicitDependencies = "YES">\n\
      <BuildActionEntries>\n\
         <BuildActionEntry\n\
            buildForTesting = "YES"\n\
            buildForRunning = "YES"\n\
            buildForProfiling = "YES"\n\
            buildForArchiving = "YES"\n\
            buildForAnalyzing = "YES">\n\
            <BuildableReference\n\
               BuildableIdentifier = "primary"\n\
               BlueprintIdentifier = "53AD62B81A91208300115D9B"\n\
               BuildableName = "' + argv.proj.toLowerCase() + '.app"\n\
               BlueprintName = "' + argv.proj.toLowerCase() + '"\n\
               ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
            </BuildableReference>\n\
         </BuildActionEntry>\n\
         <BuildActionEntry\n\
            buildForTesting = "YES"\n\
            buildForRunning = "YES"\n\
            buildForProfiling = "NO"\n\
            buildForArchiving = "NO"\n\
            buildForAnalyzing = "YES">\n\
            <BuildableReference\n\
               BuildableIdentifier = "primary"\n\
               BlueprintIdentifier = "53AD62CD1A91208300115D9B"\n\
               BuildableName = "' + argv.proj.toLowerCase() + 'Tests.xctest"\n\
               BlueprintName = "' + argv.proj.toLowerCase() + 'Tests"\n\
               ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
            </BuildableReference>\n\
         </BuildActionEntry>\n\
      </BuildActionEntries>\n\
   </BuildAction>\n\
   <TestAction\n\
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"\n\
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"\n\
      shouldUseLaunchSchemeArgsEnv = "YES"\n\
      buildConfiguration = "Debug">\n\
      <Testables>\n\
         <TestableReference\n\
            skipped = "NO">\n\
            <BuildableReference\n\
               BuildableIdentifier = "primary"\n\
               BlueprintIdentifier = "53AD62CD1A91208300115D9B"\n\
               BuildableName = "' + argv.proj.toLowerCase() + 'Tests.xctest"\n\
               BlueprintName = "' + argv.proj.toLowerCase() + 'Tests"\n\
               ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
            </BuildableReference>\n\
         </TestableReference>\n\
      </Testables>\n\
      <MacroExpansion>\n\
         <BuildableReference\n\
            BuildableIdentifier = "primary"\n\
            BlueprintIdentifier = "53AD62B81A91208300115D9B"\n\
            BuildableName = "' + argv.proj.toLowerCase() + '.app"\n\
            BlueprintName = "' + argv.proj.toLowerCase() + '"\n\
            ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
         </BuildableReference>\n\
      </MacroExpansion>\n\
   </TestAction>\n\
   <LaunchAction\n\
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"\n\
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"\n\
      launchStyle = "0"\n\
      useCustomWorkingDirectory = "NO"\n\
      buildConfiguration = "Debug"\n\
      ignoresPersistentStateOnLaunch = "NO"\n\
      debugDocumentVersioning = "YES"\n\
      allowLocationSimulation = "YES">\n\
      <BuildableProductRunnable>\n\
         <BuildableReference\n\
            BuildableIdentifier = "primary"\n\
            BlueprintIdentifier = "53AD62B81A91208300115D9B"\n\
            BuildableName = "' + argv.proj.toLowerCase() + '.app"\n\
            BlueprintName = "' + argv.proj.toLowerCase() + '"\n\
            ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
         </BuildableReference>\n\
      </BuildableProductRunnable>\n\
      <AdditionalOptions>\n\
      </AdditionalOptions>\n\
   </LaunchAction>\n\
   <ProfileAction\n\
      shouldUseLaunchSchemeArgsEnv = "YES"\n\
      savedToolIdentifier = ""\n\
      useCustomWorkingDirectory = "NO"\n\
      buildConfiguration = "Release"\n\
      debugDocumentVersioning = "YES">\n\
      <BuildableProductRunnable>\n\
         <BuildableReference\n\
            BuildableIdentifier = "primary"\n\
            BlueprintIdentifier = "53AD62B81A91208300115D9B"\n\
            BuildableName = "' + argv.proj.toLowerCase() + '.app"\n\
            BlueprintName = "' + argv.proj.toLowerCase() + '"\n\
            ReferencedContainer = "container:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
         </BuildableReference>\n\
      </BuildableProductRunnable>\n\
   </ProfileAction>\n\
   <AnalyzeAction\n\
      buildConfiguration = "Debug">\n\
   </AnalyzeAction>\n\
   <ArchiveAction\n\
      buildConfiguration = "Release"\n\
      revealArchiveInOrganizer = "YES">\n\
   </ArchiveAction>\n\
</Scheme>';

exports.xcschememanagement = '<?xml version="1.0" encoding="UTF-8"?>\n\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n\
<plist version="1.0">\n\
<dict>\n\
  <key>SchemeUserState</key>\n\
  <dict>\n\
    <key>' + argv.proj.toLowerCase() + '.xcscheme</key>\n\
    <dict>\n\
      <key>orderHint</key>\n\
      <integer>0</integer>\n\
    </dict>\n\
  </dict>\n\
  <key>SuppressBuildableAutocreation</key>\n\
  <dict>\n\
    <key>53AD62B81A91208300115D9B</key>\n\
    <dict>\n\
      <key>primary</key>\n\
      <true/>\n\
    </dict>\n\
    <key>53AD62CD1A91208300115D9B</key>\n\
    <dict>\n\
      <key>primary</key>\n\
      <true/>\n\
    </dict>\n\
  </dict>\n\
</dict>\n\
</plist>';

exports.xcworkspacedata = '<?xml version="1.0" encoding="UTF-8"?>\n\
<Workspace\n\
   version = "1.0">\n\
   <FileRef\n\
      location = "self:' + argv.proj.toLowerCase() + '.xcodeproj">\n\
   </FileRef>\n\
</Workspace>';

exports.pbxproj = '// !$*UTF8*$!\n\
{\n\
  archiveVersion = 1;\n\
  classes = {\n\
  };\n\
  objectVersion = 46;\n\
  objects = {\n\
\n\
/* Begin PBXBuildFile section */\n\
    5317ED501A9127D70077FB35 /* Website in Resources */ = {isa = PBXBuildFile; fileRef = 5317ED4F1A9127D70077FB35 /* Website */; };\n\
    53AD62BF1A91208300115D9B /* AppDelegate.swift in Sources */ = {isa = PBXBuildFile; fileRef = 53AD62BE1A91208300115D9B /* AppDelegate.swift */; };\n\
    53AD62C11A91208300115D9B /* ViewController.swift in Sources */ = {isa = PBXBuildFile; fileRef = 53AD62C01A91208300115D9B /* ViewController.swift */; };\n\
    53AD62C41A91208300115D9B /* Main.storyboard in Resources */ = {isa = PBXBuildFile; fileRef = 53AD62C21A91208300115D9B /* Main.storyboard */; };\n\
    53AD62C61A91208300115D9B /* Images.xcassets in Resources */ = {isa = PBXBuildFile; fileRef = 53AD62C51A91208300115D9B /* Images.xcassets */; };\n\
    53AD62D51A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.swift in Sources */ = {isa = PBXBuildFile; fileRef = 53AD62D41A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.swift */; };\n\
/* End PBXBuildFile section */\n\
\n\
/* Begin PBXContainerItemProxy section */\n\
    53AD62CF1A91208300115D9B /* PBXContainerItemProxy */ = {\n\
      isa = PBXContainerItemProxy;\n\
      containerPortal = 53AD62B11A91208300115D9B /* Project object */;\n\
      proxyType = 1;\n\
      remoteGlobalIDString = 53AD62B81A91208300115D9B;\n\
      remoteInfo = ' + argv.proj.toLowerCase() + ';\n\
    };\n\
/* End PBXContainerItemProxy section */\n\
\n\
/* Begin PBXFileReference section */\n\
    5317ED4F1A9127D70077FB35 /* Website */ = {isa = PBXFileReference; lastKnownFileType = folder; path = Website; sourceTree = "<group>"; };\n\
    53AD62B91A91208300115D9B /* ' + argv.proj.toLowerCase() + '.app */ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = ' + argv.proj.toLowerCase() + '.app; sourceTree = BUILT_PRODUCTS_DIR; };\n\
    53AD62BD1A91208300115D9B /* Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };\n\
    53AD62BE1A91208300115D9B /* AppDelegate.swift */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; path = AppDelegate.swift; sourceTree = "<group>"; };\n\
    53AD62C01A91208300115D9B /* ViewController.swift */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; path = ViewController.swift; sourceTree = "<group>"; };\n\
    53AD62C31A91208300115D9B /* Base */ = {isa = PBXFileReference; lastKnownFileType = file.storyboard; name = Base; path = Base.lproj/Main.storyboard; sourceTree = "<group>"; };\n\
    53AD62C51A91208300115D9B /* Images.xcassets */ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; path = Images.xcassets; sourceTree = "<group>"; };\n\
    53AD62CE1A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.xctest */ = {isa = PBXFileReference; explicitFileType = wrapper.cfbundle; includeInIndex = 0; path = ' + argv.proj.toLowerCase() + 'Tests.xctest; sourceTree = BUILT_PRODUCTS_DIR; };\n\
    53AD62D31A91208300115D9B /* Info.plist */ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };\n\
    53AD62D41A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.swift */ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; path = ' + argv.proj.toLowerCase() + 'Tests.swift; sourceTree = "<group>"; };\n\
/* End PBXFileReference section */\n\
\n\
/* Begin PBXFrameworksBuildPhase section */\n\
    53AD62B61A91208300115D9B /* Frameworks */ = {\n\
      isa = PBXFrameworksBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
    53AD62CB1A91208300115D9B /* Frameworks */ = {\n\
      isa = PBXFrameworksBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
/* End PBXFrameworksBuildPhase section */\n\
\n\
/* Begin PBXGroup section */\n\
    5317EBE41A9126FD0077FB35 /* Website */ = {\n\
      isa = PBXGroup;\n\
      path = Website;\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62B01A91208300115D9B = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        5317ED4F1A9127D70077FB35 /* Website */,\n\
        53AD62BB1A91208300115D9B /* ' + argv.proj.toLowerCase() + ' */,\n\
        53AD62D11A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests */,\n\
        53AD62BA1A91208300115D9B /* Products */,\n\
      );\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62BA1A91208300115D9B /* Products */ = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        53AD62B91A91208300115D9B /* ' + argv.proj.toLowerCase() + '.app */,\n\
        53AD62CE1A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.xctest */,\n\
      );\n\
      name = Products;\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62BB1A91208300115D9B /* ' + argv.proj.toLowerCase() + ' */ = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        53AD62BE1A91208300115D9B /* AppDelegate.swift */,\n\
        53AD62C01A91208300115D9B /* ViewController.swift */,\n\
        53AD62C21A91208300115D9B /* Main.storyboard */,\n\
        53AD62C51A91208300115D9B /* Images.xcassets */,\n\
        53AD62BC1A91208300115D9B /* Supporting Files */,\n\
      );\n\
      path = ' + argv.proj.toLowerCase() + ';\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62BC1A91208300115D9B /* Supporting Files */ = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        53AD62BD1A91208300115D9B /* Info.plist */,\n\
      );\n\
      name = "Supporting Files";\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62D11A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests */ = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        53AD62D41A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.swift */,\n\
        53AD62D21A91208300115D9B /* Supporting Files */,\n\
      );\n\
      path = ' + argv.proj.toLowerCase() + 'Tests;\n\
      sourceTree = "<group>";\n\
    };\n\
    53AD62D21A91208300115D9B /* Supporting Files */ = {\n\
      isa = PBXGroup;\n\
      children = (\n\
        53AD62D31A91208300115D9B /* Info.plist */,\n\
      );\n\
      name = "Supporting Files";\n\
      sourceTree = "<group>";\n\
    };\n\
/* End PBXGroup section */\n\
\n\
/* Begin PBXNativeTarget section */\n\
    53AD62B81A91208300115D9B /* ' + argv.proj.toLowerCase() + ' */ = {\n\
      isa = PBXNativeTarget;\n\
      buildConfigurationList = 53AD62D81A91208300115D9B /* Build configuration list for PBXNativeTarget "' + argv.proj.toLowerCase() + '" */;\n\
      buildPhases = (\n\
        53AD62B51A91208300115D9B /* Sources */,\n\
        53AD62B61A91208300115D9B /* Frameworks */,\n\
        53AD62B71A91208300115D9B /* Resources */,\n\
      );\n\
      buildRules = (\n\
      );\n\
      dependencies = (\n\
      );\n\
      name = ' + argv.proj.toLowerCase() + ';\n\
      productName = ' + argv.proj.toLowerCase() + ';\n\
      productReference = 53AD62B91A91208300115D9B /* ' + argv.proj.toLowerCase() + '.app */;\n\
      productType = "com.apple.product-type.application";\n\
    };\n\
    53AD62CD1A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests */ = {\n\
      isa = PBXNativeTarget;\n\
      buildConfigurationList = 53AD62DB1A91208300115D9B /* Build configuration list for PBXNativeTarget "' + argv.proj.toLowerCase() + 'Tests" */;\n\
      buildPhases = (\n\
        53AD62CA1A91208300115D9B /* Sources */,\n\
        53AD62CB1A91208300115D9B /* Frameworks */,\n\
        53AD62CC1A91208300115D9B /* Resources */,\n\
      );\n\
      buildRules = (\n\
      );\n\
      dependencies = (\n\
        53AD62D01A91208300115D9B /* PBXTargetDependency */,\n\
      );\n\
      name = ' + argv.proj.toLowerCase() + 'Tests;\n\
      productName = ' + argv.proj.toLowerCase() + 'Tests;\n\
      productReference = 53AD62CE1A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.xctest */;\n\
      productType = "com.apple.product-type.bundle.unit-test";\n\
    };\n\
/* End PBXNativeTarget section */\n\
\n\
/* Begin PBXProject section */\n\
    53AD62B11A91208300115D9B /* Project object */ = {\n\
      isa = PBXProject;\n\
      attributes = {\n\
        LastUpgradeCheck = 0610;\n\
        ORGANIZATIONNAME = "' + username + '";\n\
        TargetAttributes = {\n\
          53AD62B81A91208300115D9B = {\n\
            CreatedOnToolsVersion = 6.1.1;\n\
            DevelopmentTeam = 9N3V3UE8QE;\n\
          };\n\
          53AD62CD1A91208300115D9B = {\n\
            CreatedOnToolsVersion = 6.1.1;\n\
            TestTargetID = 53AD62B81A91208300115D9B;\n\
          };\n\
        };\n\
      };\n\
      buildConfigurationList = 53AD62B41A91208300115D9B /* Build configuration list for PBXProject "' + argv.proj.toLowerCase() + '" */;\n\
      compatibilityVersion = "Xcode 3.2";\n\
      developmentRegion = English;\n\
      hasScannedForEncodings = 0;\n\
      knownRegions = (\n\
        en,\n\
        Base,\n\
      );\n\
      mainGroup = 53AD62B01A91208300115D9B;\n\
      productRefGroup = 53AD62BA1A91208300115D9B /* Products */;\n\
      projectDirPath = "";\n\
      projectRoot = "";\n\
      targets = (\n\
        53AD62B81A91208300115D9B /* ' + argv.proj.toLowerCase() + ' */,\n\
        53AD62CD1A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests */,\n\
      );\n\
    };\n\
/* End PBXProject section */\n\
\n\
/* Begin PBXResourcesBuildPhase section */\n\
    53AD62B71A91208300115D9B /* Resources */ = {\n\
      isa = PBXResourcesBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
        5317ED501A9127D70077FB35 /* Website in Resources */,\n\
        53AD62C41A91208300115D9B /* Main.storyboard in Resources */,\n\
        53AD62C61A91208300115D9B /* Images.xcassets in Resources */,\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
    53AD62CC1A91208300115D9B /* Resources */ = {\n\
      isa = PBXResourcesBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
/* End PBXResourcesBuildPhase section */\n\
\n\
/* Begin PBXSourcesBuildPhase section */\n\
    53AD62B51A91208300115D9B /* Sources */ = {\n\
      isa = PBXSourcesBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
        53AD62C11A91208300115D9B /* ViewController.swift in Sources */,\n\
        53AD62BF1A91208300115D9B /* AppDelegate.swift in Sources */,\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
    53AD62CA1A91208300115D9B /* Sources */ = {\n\
      isa = PBXSourcesBuildPhase;\n\
      buildActionMask = 2147483647;\n\
      files = (\n\
        53AD62D51A91208300115D9B /* ' + argv.proj.toLowerCase() + 'Tests.swift in Sources */,\n\
      );\n\
      runOnlyForDeploymentPostprocessing = 0;\n\
    };\n\
/* End PBXSourcesBuildPhase section */\n\
\n\
/* Begin PBXTargetDependency section */\n\
    53AD62D01A91208300115D9B /* PBXTargetDependency */ = {\n\
      isa = PBXTargetDependency;\n\
      target = 53AD62B81A91208300115D9B /* ' + argv.proj.toLowerCase() + ' */;\n\
      targetProxy = 53AD62CF1A91208300115D9B /* PBXContainerItemProxy */;\n\
    };\n\
/* End PBXTargetDependency section */\n\
\n\
/* Begin PBXVariantGroup section */\n\
    53AD62C21A91208300115D9B /* Main.storyboard */ = {\n\
      isa = PBXVariantGroup;\n\
      children = (\n\
        53AD62C31A91208300115D9B /* Base */,\n\
      );\n\
      name = Main.storyboard;\n\
      sourceTree = "<group>";\n\
    };\n\
/* End PBXVariantGroup section */\n\
\n\
/* Begin XCBuildConfiguration section */\n\
    53AD62D61A91208300115D9B /* Debug */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        ALWAYS_SEARCH_USER_PATHS = NO;\n\
        CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";\n\
        CLANG_CXX_LIBRARY = "libc++";\n\
        CLANG_ENABLE_MODULES = YES;\n\
        CLANG_ENABLE_OBJC_ARC = YES;\n\
        CLANG_WARN_BOOL_CONVERSION = YES;\n\
        CLANG_WARN_CONSTANT_CONVERSION = YES;\n\
        CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;\n\
        CLANG_WARN_EMPTY_BODY = YES;\n\
        CLANG_WARN_ENUM_CONVERSION = YES;\n\
        CLANG_WARN_INT_CONVERSION = YES;\n\
        CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;\n\
        CLANG_WARN_UNREACHABLE_CODE = YES;\n\
        CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;\n\
        "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";\n\
        COPY_PHASE_STRIP = NO;\n\
        ENABLE_STRICT_OBJC_MSGSEND = YES;\n\
        GCC_C_LANGUAGE_STANDARD = gnu99;\n\
        GCC_DYNAMIC_NO_PIC = NO;\n\
        GCC_OPTIMIZATION_LEVEL = 0;\n\
        GCC_PREPROCESSOR_DEFINITIONS = (\n\
          "DEBUG=1",\n\
          "$(inherited)",\n\
        );\n\
        GCC_SYMBOLS_PRIVATE_EXTERN = NO;\n\
        GCC_WARN_64_TO_32_BIT_CONVERSION = YES;\n\
        GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;\n\
        GCC_WARN_UNDECLARED_SELECTOR = YES;\n\
        GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;\n\
        GCC_WARN_UNUSED_FUNCTION = YES;\n\
        GCC_WARN_UNUSED_VARIABLE = YES;\n\
        IPHONEOS_DEPLOYMENT_TARGET = 8.1;\n\
        MTL_ENABLE_DEBUG_INFO = YES;\n\
        ONLY_ACTIVE_ARCH = YES;\n\
        SDKROOT = iphoneos;\n\
        SWIFT_OPTIMIZATION_LEVEL = "-Onone";\n\
        TARGETED_DEVICE_FAMILY = "1,2";\n\
      };\n\
      name = Debug;\n\
    };\n\
    53AD62D71A91208300115D9B /* Release */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        ALWAYS_SEARCH_USER_PATHS = NO;\n\
        CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";\n\
        CLANG_CXX_LIBRARY = "libc++";\n\
        CLANG_ENABLE_MODULES = YES;\n\
        CLANG_ENABLE_OBJC_ARC = YES;\n\
        CLANG_WARN_BOOL_CONVERSION = YES;\n\
        CLANG_WARN_CONSTANT_CONVERSION = YES;\n\
        CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;\n\
        CLANG_WARN_EMPTY_BODY = YES;\n\
        CLANG_WARN_ENUM_CONVERSION = YES;\n\
        CLANG_WARN_INT_CONVERSION = YES;\n\
        CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;\n\
        CLANG_WARN_UNREACHABLE_CODE = YES;\n\
        CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;\n\
        "CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";\n\
        COPY_PHASE_STRIP = YES;\n\
        ENABLE_NS_ASSERTIONS = NO;\n\
        ENABLE_STRICT_OBJC_MSGSEND = YES;\n\
        GCC_C_LANGUAGE_STANDARD = gnu99;\n\
        GCC_WARN_64_TO_32_BIT_CONVERSION = YES;\n\
        GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;\n\
        GCC_WARN_UNDECLARED_SELECTOR = YES;\n\
        GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;\n\
        GCC_WARN_UNUSED_FUNCTION = YES;\n\
        GCC_WARN_UNUSED_VARIABLE = YES;\n\
        IPHONEOS_DEPLOYMENT_TARGET = 8.1;\n\
        MTL_ENABLE_DEBUG_INFO = NO;\n\
        SDKROOT = iphoneos;\n\
        TARGETED_DEVICE_FAMILY = "1,2";\n\
        VALIDATE_PRODUCT = YES;\n\
      };\n\
      name = Release;\n\
    };\n\
    53AD62D91A91208300115D9B /* Debug */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n\
        ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;\n\
        CODE_SIGN_IDENTITY = "iPhone Developer";\n\
        INFOPLIST_FILE = ' + argv.proj.toLowerCase() + '/Info.plist;\n\
        IPHONEOS_DEPLOYMENT_TARGET = 7.0;\n\
        LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";\n\
        PRODUCT_NAME = "$(TARGET_NAME)";\n\
        TARGETED_DEVICE_FAMILY = "1,2";\n\
      };\n\
      name = Debug;\n\
    };\n\
    53AD62DA1A91208300115D9B /* Release */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;\n\
        ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;\n\
        CODE_SIGN_IDENTITY = "iPhone Developer";\n\
        INFOPLIST_FILE = ' + argv.proj.toLowerCase() + '/Info.plist;\n\
        IPHONEOS_DEPLOYMENT_TARGET = 7.0;\n\
        LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";\n\
        PRODUCT_NAME = "$(TARGET_NAME)";\n\
        TARGETED_DEVICE_FAMILY = "1,2";\n\
      };\n\
      name = Release;\n\
    };\n\
    53AD62DC1A91208300115D9B /* Debug */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        BUNDLE_LOADER = "$(TEST_HOST)";\n\
        FRAMEWORK_SEARCH_PATHS = (\n\
          "$(SDKROOT)/Developer/Library/Frameworks",\n\
          "$(inherited)",\n\
        );\n\
        GCC_PREPROCESSOR_DEFINITIONS = (\n\
          "DEBUG=1",\n\
          "$(inherited)",\n\
        );\n\
        INFOPLIST_FILE = ' + argv.proj.toLowerCase() + 'Tests/Info.plist;\n\
        LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";\n\
        PRODUCT_NAME = "$(TARGET_NAME)";\n\
        TEST_HOST = "$(BUILT_PRODUCTS_DIR)/' + argv.proj.toLowerCase() + '.app/' + argv.proj.toLowerCase() + '";\n\
      };\n\
      name = Debug;\n\
    };\n\
    53AD62DD1A91208300115D9B /* Release */ = {\n\
      isa = XCBuildConfiguration;\n\
      buildSettings = {\n\
        BUNDLE_LOADER = "$(TEST_HOST)";\n\
        FRAMEWORK_SEARCH_PATHS = (\n\
          "$(SDKROOT)/Developer/Library/Frameworks",\n\
          "$(inherited)",\n\
        );\n\
        ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;\n\
        CODE_SIGN_IDENTITY = "iPhone Developer";\n\
        INFOPLIST_FILE = ' + argv.proj.toLowerCase() + 'Tests/Info.plist;\n\
        LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";\n\
        IPHONEOS_DEPLOYMENT_TARGET = 7.0;\n\
        PRODUCT_NAME = "$(TARGET_NAME)";\n\
        TARGETED_DEVICE_FAMILY = "1,2";\n\
        TEST_HOST = "$(BUILT_PRODUCTS_DIR)/' + argv.proj.toLowerCase() + '.app/' + argv.proj.toLowerCase() + '";\n\
      };\n\
      name = Release;\n\
    };\n\
/* End XCBuildConfiguration section */\n\
\n\
/* Begin XCConfigurationList section */\n\
    53AD62B41A91208300115D9B /* Build configuration list for PBXProject "' + argv.proj.toLowerCase() + '" */ = {\n\
      isa = XCConfigurationList;\n\
      buildConfigurations = (\n\
        53AD62D61A91208300115D9B /* Debug */,\n\
        53AD62D71A91208300115D9B /* Release */,\n\
      );\n\
      defaultConfigurationIsVisible = 0;\n\
      defaultConfigurationName = Release;\n\
    };\n\
    53AD62D81A91208300115D9B /* Build configuration list for PBXNativeTarget "' + argv.proj.toLowerCase() + '" */ = {\n\
      isa = XCConfigurationList;\n\
      buildConfigurations = (\n\
        53AD62D91A91208300115D9B /* Debug */,\n\
        53AD62DA1A91208300115D9B /* Release */,\n\
      );\n\
      defaultConfigurationIsVisible = 0;\n\
      defaultConfigurationName = Release;\n\
    };\n\
    53AD62DB1A91208300115D9B /* Build configuration list for PBXNativeTarget "' + argv.proj.toLowerCase() + 'Tests" */ = {\n\
      isa = XCConfigurationList;\n\
      buildConfigurations = (\n\
        53AD62DC1A91208300115D9B /* Debug */,\n\
        53AD62DD1A91208300115D9B /* Release */,\n\
      );\n\
      defaultConfigurationIsVisible = 0;\n\
      defaultConfigurationName = Release;\n\
    };\n\
/* End XCConfigurationList section */\n\
  };\n\
  rootObject = 53AD62B11A91208300115D9B /* Project object */;\n\
}';


exports.html = '<!DOCTYPE html>\n\
<html lang="en">\n\
<head>\n\
  <meta charset="utf-8">\n\
  <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n\
  <meta name="apple-mobile-web-app-capable" content="yes">\n\
  <meta name="mobile-web-app-capable" content="yes">\n\
  <meta name="msapplication-tap-highlight" content="no">\n\
  <title>ChocolateChip-UI iOS</title>\n\
  <style>\n\
    html, body {\n\
      padding: 0;\n\
      margin: 0;\n\
      position: absolute;\n\
      top: 0;\n\
      right: 0;\n\
      bottom: 0;\n\
      left: 0;\n\
      overflow: hidden;\n\
    }\n\
    body {\n\
      background-color: #efeff4;\n\
      -webkit-font-smoothing: antialiased;\n\
      -webkit-user-select: none;\n\
      -webkit-tap-highlight-color: transparent;\n\
      font-size: 1em;\n\
      line-height: 1.5;\n\
    }\n\
    article {\n\
      position: absolute;\n\
      top: 45px;\n\
      right: 0;\n\
      bottom: 0;\n\
      left: 0;\n\
      -webkit-transition: all 0.15s;\n\
      transition: all 0.15s;\n\
      overflow-x: hidden;\n\
      overflow-y: auto;\n\
      -webkit-overflow-scrolling: touch;\n\
      display: flex;\n\
      display: -webkit-flex;\n\
      display: -webkit-box;\n\
      -webkit-box-orient: vertical;\n\
      -webkit-flex-direction: column;\n\
      flex-direction: column;\n\
      -webkit-justify-content: center;\n\
      justify-content: center;\n\
      -webkit-box-align: start;\n\
      -webkit-align-items: flex-start;\n\
      align-items: flex-start;\n\
    }\n\
    article > section{\n\
      padding: 20px 10px 10px;\n\
      padding-bottom: 100px;\n\
      -webkit-box-flex: 1;\n\
      -webkit-flex: 1;\n\
      flex: 1;\n\
      position: absolute;\n\
      top: 45px;\n\
      left: 0;\n\
      width: 100%;\n\
      min-height: 100% !important;\n\
      background-color: #fff;\n\
    }\n\
    nav {\n\
      background-color: #f7f7f7;\n\
      border-bottom: solid 1px #a7a7aa;\n\
      height: 45px;\n\
      -webkit-box-sizing: border-box;\n\
      box-sizing: border-box;\n\
      text-align: center;\n\
      position: absolute;\n\
      z-index: 100000;\n\
      top: 45px;\n\
      left: 0;\n\
      right: 0;\n\
      padding: 0 15px;\n\
      vertical-align: middle;\n\
    }\n\
    nav > h1 {\n\
      text-align: center;\n\
      font: normal 12pt/14pt HelveticaNeue, Sans-serif;\n\
      color: #000000;\n\
      -webkit-flex: 1;\n\
      flex: 1;\n\
    }\n\
  </style>\n\
</head>\n\
<body>\n\
  <nav>\n\
    <h1>' + argv.proj + '</h1>\n\
  </nav>\n\
  <article>\n\
    <section>\n\
      <h2>Replace the contents of this folder with the files and other assets for your ChocolateChip-UI Web app.</h2>\n\
    </section>\n\
  </article>\n\
</body>\n\
</html>';

exports.testsPlist = '<?xml version="1.0" encoding="UTF-8"?>\n\
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n\
<plist version="1.0">\n\
<dict>\n\
  <key>CFBundleDevelopmentRegion</key>\n\
  <string>en</string>\n\
  <key>CFBundleExecutable</key>\n\
  <string>$(EXECUTABLE_NAME)</string>\n\
  <key>CFBundleIdentifier</key>\n\
  <string>' + argv.proj.toLowerCase() + '.$(PRODUCT_NAME:rfc1034identifier)</string>\n\
  <key>CFBundleInfoDictionaryVersion</key>\n\
  <string>6.0</string>\n\
  <key>CFBundleName</key>\n\
  <string>$(PRODUCT_NAME)</string>\n\
  <key>CFBundlePackageType</key>\n\
  <string>BNDL</string>\n\
  <key>CFBundleShortVersionString</key>\n\
  <string>1.0</string>\n\
  <key>CFBundleSignature</key>\n\
  <string>????</string>\n\
  <key>CFBundleVersion</key>\n\
  <string>1</string>\n\
</dict>\n\
</plist>';

exports.testsSwift = '//\n\
//  ' + argv.proj.toLowerCase() + 'Tests.swift\n\
//  ' + argv.proj.toLowerCase() + 'Tests\n\
//\n\
//  Created by ' + argv.username + ' on 2/15/15.\n\
//  Copyright (c) 2015 ' + argv.username + '. All rights reserved.\n\
//\n\
\n\
import UIKit\n\
import XCTest\n\
\n\
class ' + argv.proj.toLowerCase() + 'Tests: XCTestCase {\n\
    \n\
    override func setUp() {\n\
        super.setUp()\n\
        // Put setup code here. This method is called before the invocation of each test method in the class.\n\
    }\n\
  \n\
    override func tearDown() {\n\
        // Put teardown code here. This method is called after the invocation of each test method in the class.\n\
        super.tearDown()\n\
    }\n\
    \n\
    func testExample() {\n\
        // This is an example of a functional test case.\n\
        XCTAssert(true, "Pass")\n\
    }\n\
    \n\
    func testPerformanceExample() {\n\
        // This is an example of a performance test case.\n\
        self.measureBlock() {\n\
            // Put the code you want to measure the time of here.\n\
        }\n\
    }\n\
    \n\
}';