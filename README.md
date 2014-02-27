# Random Content Generator

Node.js [Express](http://expressjs.com/) application which generates a random amount of content as an HTML page.  This app was create out of an need for a quick HTTP service to generate a specified amount of content for network throughput testing. 

Or, it might not be useful at all. You decide!  Really, it was a good way to start learning Node.js development.

Uses [Chance.js](http://chancejs.com/) to generate random content.

## To run:

1. Checkout this project
1. [Install Node.js](http://nodejs.org/download/)
1. Run `npm install`
1. Run `node app`
1. With a browser, navigate to: http://localhost:3000/random?sizeInKb={size in  kilobytes (approximate, not exact) of content to generate. A number between 1 and 20000}

## Options

* You can change default ports and other items in config.js.
* If you want to add no-cache headers on the response, add a query parameter of `dontCache=1`. Ex: http://localhost:#{app_port}/random?sizeInKb={sizeInKb}&dontCache=1&numberOfImages=2
* To add a couple of images to the markup, add a `numberOfImages=N` query parameter. Ex: http://localhost:#{app_port}/random?sizeInKb={sizeInKb}&numberOfImages=2 (right now, they're just the same image, this needs to be improved.