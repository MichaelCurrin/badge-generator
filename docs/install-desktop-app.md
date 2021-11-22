# Install as desktop app

If you want to run the web app without having to switch to the tab in your browser or without having to have the browser open, then you can install as a standalone desktop app.


## Related

- [Nativefier](https://michaelcurrin.github.io/dev-resources/resources/javascript/packages/nativefier/) on Dev Resources.


## How it works

This flow uses Nativefier from NPM. This makes a desktop app built on Electron, which just serves as a wrapper on the web app. 

So you'll get the latest content (you might have to do <kbd>CTRL</kbd> + <kbd>R</kbd> to refresh). But also requires an internet connection to use the app.


## Requirements

- Node


## Install

### 1. Install Nativefier globally

```sh
$ npm install nativefier@latest --global
```

### 2. Create desktop app

```sh
$ cd ~/Downloads
$ nativefier https://michaelcurrin.github.io/badge-generator/
```

### 3. Install

#### macOS

1. If you are upgrading, delete the old one:
    ```sh
    $ rm -rf ~/Applications/badge-generator.app/
    ```
1. Install the app by copying it from your Downloads into Applications.
    ```sh
    $ mv badge-generator-darwin-x64/badge-generator.app/ ~/Applications
    ```
1. There are just license files and metadata left - so you can delete the directory in Downloads.
    ```sh
    $ rm -rf badge-generator-darwin-x64/
    ```

#### Linux

TBC


## Run

Open from your applications launcher.

It's icon will default to the GitHub octocat.
