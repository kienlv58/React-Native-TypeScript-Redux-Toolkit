# React-Native-TypeScript-Redux-Toolkit
This project inspired by <a href="https://github.com/infinitered/ignite">Ignite</a> and Customize it
# Installation

You can simply clone the project and start with your barebone project

```sh
git clone https://github.com/kienlv58/React-Native-TypeScript-Redux-Toolkit.git
```

## Android local.properties

- Go to `Android -> local.properties`
- Change the your local android sdk and cmake path

# What's Included?

- **Navigation System**
  - React Navigation V5
  - Ready to use Stack and Tab Screens with navigation
- **State Management**
  - Redux-Toolkit
- **Code-format and check**
  - Eslint
  - Tslint
  - Prettier
  - Husky for pre-commit check
- **Debug tool and Networl**
  - Reactron
  - Flipper
- **Built-in Theme System**
  - Colors
  - Fonts
- **Built-in React Native Splash Screen**
- **Built-in Localization (Multi-Language Support)**
- **HTTP Network Management**
  - Axios
  - API Service with Usage Examples
- **Babel Plugin Module Resolver**
  - Fixing the relative path problem
  - Visit `.babelrc` to ready to use and more customization
 - All you need to do is copy-paste the .tff file and run `npx react-native-asset` command

## Project Structure

```
├───android
├───ios
├───src
│   ├───screens
│   │   ├───detail
│   │   │   ├───DetailScreen.style.ts
│   │   │   └───DetailScreen.tsx
│   │   ├───home
│   │   │   ├───HomeScreen.style.ts
│   │   │   └───HomeScreen.tsx
│   │   └───search
│   │       ├───SearchScreen.style.ts
│   │       └───SearchScreen.tsx
│   ├───services
│   │   ├───api
│   │   │   ├───api.constant.ts
│   │   │   └───index.ts
│   │   ├───event-emitter
│   │   │   └───index.ts
│   │   ├───models
│   │   │   └───index.ts
│   │   └───navigation
│   │       └───index.tsx
│   ├───shared
│   │   ├───components
│   │   │   └───text-wrapper
│   │   ├───constants
│   │   │   └───index.ts
│   │   ├───localization
│   │   │   └───index.ts
│   │   └───theme
│   │       ├───fonts
│   │       ├───colors.ts
│   │       ├───font-size.ts
│   │       ├───index.ts
│   │       └───theme.ts
│   └───utils
│       ├───local-storage
│       │   └───index.ts
│       └───index.ts
├───.babelrc
├───.buckconfig
├───.eslintrc.js
├───.gitattributes
├───.gitignore
├───.npmignore
├───.prettierrc.js
├───.watchmanconfig
├───App.tsx
├───README.md
├───app.json
├───index.js
├───metro.config.js
├───package-lock.json
├───package.json
├───react-native.config.js
├───tsconfig.json
```


# Step By Step Guide

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies

- `rm -rf .git README.md`
- `rm -rf ./assets/RN-Typescript-Boilerplate.gif ./assets/logo.png`
- `git init`
- `npm i`
- `npx pod-install` (iOS Only)
- `react-native run-ios/android`

**OR**

- `npm run clean-up`
- `npm i && npx pod-install`
- `react-native run-ios/android`

## Rename the project: (Thanks to [react-native-name](https://github.com/junedomingo/react-native-rename))

```sh
npx react-native-rename <your-project-name>
```

> With custom Bundle Identifier (Android only. For iOS, please use Xcode)

```sj
npx react-native-rename <your-project-name> -b <bundleIdentifier>
```

### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android SDK

```
ndk.dir=/Users/your-name/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/your-name/Library/Android/sdk
```

- `cd .. & react-native run-ios/android`

### NOTES

If husky not work. Please install it by manually first:
 - `husky install`

### Future Plans

- [x] ~~LICENSE~~
- [ ] Better and separated documentation

## Author

Kienlv, kienlv58@gmail.com

## License

React Native Typescript Redux Toolkit is available under the MIT license. See the LICENSE file for more info.
