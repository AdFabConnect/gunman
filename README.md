# Gyroscope Remote
Your mobile as a gun, your laptop as a target !
Learn how to synchronize your mobile gyroscope with a crosshair on a remote screen !

## Introduction
This PoC has been used for one of our amazing famo.us mixed mode demos. 
It was the episode 2 of our *AdFabulous Famo.us* show in March-April 2015 demoing what you can do with famo.us Mixed Mode + nodeJS + SocketIO.

## What
This Gunman repo contains only the socketJS + nodeJS stuff (we're waiting for the official release of famo.us to show you more !).
It illustrates how you can use your mobile device to precisely interact with a pointer on a desktop/laptop/TV/whatever remote screen.

## How
Here is what is used to make it happen :
- The server: NodeJS, express, socket.io : Nothing particular here. We define 3 routes. One for the gun (the mobile), one for the target (your remote screen) and the last for an image. We're listening for 4 events.

- The gun: The gyroscope is used to send data when device orientation changes.

- The target: The target receives the different events and calculate the position of the "crosshair" based on Gyroscope signal.

## Installation
Clone this repo then `npm install` it

## usage
1. load `http://your.ip.address:3000/gun` on your mobile
2. load `http://your.ip.address:3000/target` on your desktop
3. aim the upper left of your desktop screen with your mobile and press "Calibrate upper left"
4. aim the upper left of your desktop screen with your mobile and press "Calibrate lower right"
5. Now your gun can be used on teh screen ! You'll see a crosshair on the screen following your mobile orientation !
6. And if you shoot, you'll display coordinates of the shoot on the screen

## Code explained
The Gyroscope coordinates have to be "translated" into coordinates on the screen. 2 main operations have to be done :
1. The calibration of the gyroscope on your screen: The alpha is a position in ° on the trigonometric circle. So depending on where your screen is located compared to the North, you'll have to apply the right calculation. This is the role of the TrigoGyro class
2. The ratio to apply based on the width of your screen: The calibration gives you alpha and beta of the upper left and lower right corners of your screen. Knowing the width and height of your screen, you're then able to calculate the ratio to apply to determine the position of the crosshair on your screen.
3. The smoothness of the crosshair's move on the screen : Once again, Myles (https://github.com/TheAlphaNerd) from famo.us gave me a good advice. The low pass filter. So Filter class is this low pass filter. (you should go and see https://github.com/gregorybesson/blow if you're interested in interacting with your device with a blow in HTML5).

As usually, don't hesitate to ask questions or improve the code or criticize or suggest improvements !
