# Images Processing API
## Introduction

This is a simple api that resizes the pictures provided in the image folder. It's just an assignment from the udacity fullstack nanodegree with javascript.

## How to use it ?

- The link of the index of the server is on : [http://localhost:3300/](http://localhost:3300/).
In this page you will find the title of the app and a link to the next page ( The home API page).
- In the API home page, [http://localhost:3300/api](http://localhost:3300/api). You will find the title of the API, a short description about using the app and a gallery of all  images in the image folder that can be used with their names.
- To use this app you will need to use a link similare to this one, [http://localhost:3300/api/resize?name=***mypicture***&height=***500***&width=***600***](http://localhost:3300/api/resize?name=mypicture&height=500&width=500), where ***mypicture***,***500*** and ***600*** are respectively the name of the image, the wanted width and height.

## The scripts to build and test the file 

* To compile the Tyescript :   

    npm run build

* To test it with jasmine manualy : 

    npm run jasmine

* or you can do but of them by :

    npm run test

* To start the server and watch status using nodemon :

    npm run start 

* To run the server via node after production :

    npm run start:prod

* To test the linting :

    npm run lint
    
* To correct the linting errors :

    npm run lint:fix

* To format the code with prettier 

    npm run format


