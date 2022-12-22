# DAI-HTTP-INFRA

HTTP Infrastructure course project

## Prerequisite of the entire project

- Have docker installed (https://docs.docker.com/get-docker/)

## Static Apache HTTP Server

### Running the server

Open a terminal and run the following commands :
```
cd *Your-folder-location*/docker-images/apache-php-image
docker build -t dai/apache_php .
docker run -p *port*:80 dai/apache_php
```

You should see something like this:
![](https://i.imgur.com/QVezukO.png)

You should now have a running dai/apache_php container, you can check with the following command:
```
docker ps
```

You can then access your page via localhost:*port* on any web client.

### Apache Configuration

To access our apache configuration we need to access a bash inside our running container.

To do that, run the following command in a new terminal :
```
docker ps
```

This command lists the current running containers, find the name of your dai/apache_php container and use it in the following commands :
```
docker exec -it *found-name* /bin/bash
cd /etc/apache2
```

You can access all of Apache's configuration there.

Learn more here : [Apache Documentation](https://httpd.apache.org/docs/)

### Web page Configuration

Currently, the following template is used : [template](https://startbootstrap.com/template/full-width-pics)

Everything is located in *docker-images\content*, you just need to replace or change files in there to modifiy your web page.

## Dynamic Express.js Server

### Prerequisite

- To test the server, you need telnet installed.
- You also need node.js and npm to install the node_modules required to run the application.

### Setup node packages

Open a terminal and run the following commands :
```
cd *Your-folder-location*/docker-images/express-image/src
npm install --save chance
npm install --save express
```

Those commands are used to install the packages you need to run the current index.js file.

### Running the Server

Open a terminal and run the following commands :
```
cd *Your-folder-location*/docker-images/express-image
docker build -t dai/express_passwords .
docker run -p *port*:7777 dai/express_passwords
```

Your server should be running the application.

### Test your application

You can test the application with following commands which connects you to the application and requests data :
```
telnet localhost *port*
GET / HTTP/1.0

```

Be sure to press \<enter\> one more time after the *GET / HTTP/1.0* to send the request.

### How to modify the application

The application is located in the /docker-images/express-image/src folder.

You can modify :

- The package in the *package.json* file.
- The application in the *index.js* file.

You can add packages using *npm*.