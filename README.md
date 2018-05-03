BrowserScreens
--

![v0.0.1](http://i.imgur.com/gyuLHqy.png)

Few days back (mid May 2016), I was designing a homepage for my website and realized that different browsers (on mobile, laptop etc) display differently. Online cross-browser compatibility services were not that good (wait time, amount of browsers that can be selected, sign ups only etc). So after much considerations, I've create an [Electron](http://electron.atom.io/) app that helps automate this process, and at the same time, learn more about [Electron](http://electron.atom.io/).

## Current Features

[![Greenkeeper badge](https://badges.greenkeeper.io/shaunidiot/electron-browserscreens.svg)](https://greenkeeper.io/)

- Multiple browser type (more to come)
- Multiple browser window size
- Render delay (milliseconds delay before taking screenshots)
- Screenshots are rendered and placed in `shots` folder named `<url>_<date>_<time(HHmm)>_<random_number (to prevent conflicts)>` and images named `<url>_<browser_type>`.


## Running the app

	electron app.js

### Prerequisite

- Electron

		npm install electron-prebuilt -g

- Node modules

		npm install --production

## Current State

A simple app with only 4 browsers (for now). Will get more up as soon as possible.

## Version
- 290516 [v0.0.1] - First release
