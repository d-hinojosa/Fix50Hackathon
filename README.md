# Bloom
## Solving Charlotte's economic mobility crisis
## Youtube Video
https://www.youtube.com/watch?v=pGKzyE9HDs8&feature=youtu.be

    


# FIX50 Hackathon App

Competitive submissions will explain the problem, identify a solution, and provide measurable outcomes. Use your video and written submission to convince the judges that you have the right idea and the right team to create a lasting, positive impact on the Charlotte community. Submissions with more mature and developed proposals will be given favorable consideration, meaning having a product developed, a proof of concept, or something created will increase your chances of success. 

## Requirements

Idea — Is this a new concept? Are there already ongoing projects addressing your proposal?
Impact — Think ROI. If chosen, what are you expected results? How will you use the opportunity to create a tangible difference.
Maturity — How sophisticated is your proposal? Is it just an idea? Is it fully developed and ready to go?

For development, you will only need Node.js and a node global package `Yarn` installed in your environement.

- ### MongoDB
  The project uses MongoDB as a database. If you are on Mac and using Homebrew package manager the installation is as simple as `brew install mongodb`.

### Node

- #### Node installation on Windows

  Just go on [Official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g


### Start the MongoDB server

First we need to create the `db` directory where the database files will live in. In your terminal navigate to the `root` of your system by doing `cd ..` until you reach the top directory. You can create the directory by running `sudo mkdir -p /data/db`. Now open a different tab in your terminal and run `mongod` to start the Mongo server.

## Install

    $ git clone https://github.com/gianna-miranda/bloom.git
    $ cd bloom
    $ npm install || npm i 

## Running the project

    $ npm run start

## Simple build for production

    $ npm build
    
## Authors

Gianna Miranda, Emmanuel Brown, Aj Blocker, Diana Hinojosa, Emily Hernandez

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
