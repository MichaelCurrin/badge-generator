# Install as desktop app

If you want to run the web app without having to switch to the tab in your browser or without having to have the browser open, then you can install as a standalone desktop app.


## How it works

This flow uses Nativefier from NPM. This makes a desktop app built on Electron, which just serves as a wrapper on the web app. 

So you'll get the latest content (you might have to do CTRL + R to refresh). But also require an internet connection to use the app.

No need to set up dependencies from the app.


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
```

```sh
$ nativefier https://michaelcurrin.github.io/badge-generator/
```

### 3. Install

#### macOS

1. If you are upgrading, delete the old one:
    ```sh
    $ rm -rf ~/Applications/badge-generator.app/
    ```
1. Install the app.
    ```sh
    $ mv badge-generator-darwin-x64/badge-generator.app/ ~/Applications
    ```

#### Linux

TBC


## Run

Open from your applications launcher.

It's icon will default to the GitHub octocat.
