# Happy-Citizens Project 

## Vision Statement
Vision Statement: The software system being proposed deals to help citizens of the 
City of Happy Citizens keep record of their personal property. Applications of this 
system can be used for insurance claims after a natural disaster or catastrophe. 
Citizens will be allowed to create a secure property account, as well as, add, remove, 
edit, print, search, download property records. Users with administrative power can 
have access to all citizens' property accounts. Citizens will be able to give other users access to their account. The system will be available through the web and will be accessible on any device with a web browser and an internet connection.

## Dependencies

- Vscode (or any texteditor of your choice)
- WSL2
- Ubuntu
- nvm
- npm
- nodejs
- Express
- firebase-tools

# Windows Build

> ***First if you have't yet asked the creater of Happy-Citizens for permission to access it, please do so that you can run and host the firebase server.***

## installing Vscode

go here to install [vscode](https://code.visualstudio.com/download).

Open up vscode and install any extensions that you would like. Included in the downloaded extensions, install WSL by microsoft.

## Installing WSL2 with Ubuntu

First you want to start off and download wsl2 to your local computer. You can do this by this command by entering windows powershell and typing the following command

> ` wsl --install`

This will install wsl2.

next go to the windows store and install the latest version of ubuntu. After downloading Ubuntu open up Ubuntu. This will automatically link WSL2 with Ubuntu and you will be using Wsl2 with the Ubuntu Linux distributuion.

If you are having any trouble setting up Ubuntu or installing, visit [here](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#7-enjoy-ubuntu-on-wsl) for help.

## installing nvm, npm, and node

We will be installing nvm in Ubuntu. This is node version manager which manages our versions of Node and Npm for us. go to this [link](https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl) for downloading nvm and some beginner functionallity. 

After installing nvm, you will want to install node. This should be in the previous link.

npm is automatically installed with node so you don't have to worry about installing them seperately.

## installing dependencies
You can now open up a vscode in Ubuntu using the command

> `code .`

From here you can open a terminal and continue your commands in the vscode terminal.

First pull the most recent pushed code from the Happy-Citizens git repo [here](https://github.com/naye1443/Happy-Citizens).

navigate to the project root directory where the package.json lives. When here, run

> `npm install`

***If you have anny issues installing the dependencies, remove the node-sass and sass dependency. Then retry the command. The pacakge is now depreciated and is only supported by Node v17.0.0***

This will install all the dependencies in the pacakge.json file.
After this command, you should have the firebase CLI which we will use to host our application. You can go [here](https://firebase.google.com/docs/cli#windows-npm) to learn more about the setup.

## running the app

To run the app, run

> `firebase serve --only hosting,functions`

in the root directory of the Happy-Citizens. This should spin up a local verison of the Happy Citizens app on your local host. To access it, click the link that is given in the terminal or type in http://localhost:5001/happy-8293/us-central1/app into any web browser.

## If running into errors

Certain versions of node are needed to install certain firebase applications. Hence `functions@1.0.01` uses node v16, however, your current version may be ^=18. Stay between version 16.0.0 and vs 18 and up.

up date your version of dependencies and dev dependencies. Run `npm-check-updates -u` and then run `ncu -u` to update package.json. Then run `npm install` to install new versions.

