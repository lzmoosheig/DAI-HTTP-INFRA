# DAI-HTTP-INFRA

HTTP Infrastructure course project

## Prerequisite of the entire project

- Have docker installed (https://docs.docker.com/get-docker/)

## Scripts

We have made two scripts named "build-image.sh" and "run-container.sh" to make the process easier.

These scripts are made to build and run the static and dynamic servers. They're located at the root of each servers folder, respectively "/docker-images/apache-php-image" and "/docker-images/express-image".

If you use Docker Desktop, you simply need to open the build-image script first and then the run-container script.

For any other implementation, simply go to directory where the script are located and use the following command:
```
sh build-image.sh
sh run-container.sh
```
Note: you may need root permissions to run these commands.

## Static Apache Server

Open a terminal and run the following commands or use the build and run scripts :
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

You don't need to follow this section(Running the servers) if you're using our scripts!

Open a terminal and run the following commands or use the build and run scripts :
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

You can also access it on navigator via localhost:*port* where you'll see this :

![](https://i.imgur.com/PU5Owsg.png)

### How to modify the application

The application is located in the /docker-images/express-image/src folder.

You can modify :

- The package in the *package.json* file.
- The application in the *index.js* file.

You can add packages using *npm*.

## Running both servers

### Docker compose

You can directly run both servers (static and dynamic) by using Docker compose.

### Prerequisite

- Install Docker compose following this tutorial: https://docs.docker.com/compose/install/

### Run servers
Open a terminal and run the following commands :
```
cd *Your-folder-location*/docker-images/compose
docker compose up --build -d
```

Now both servers should be running and can be accessed via :
- localhost (for the static server)
- localhost/api (for the dynamic server)

You can then shut down your servers using :
```
docker compose down
```

### Debugging your compose

If you want to know what's going on while your server are running, you simply need to remove -d when launching your compose :
```
docker compose up --build
```
You should see something like this in your terminal:

![](https://i.imgur.com/RfAhdoi.png)

For the moment, the static server is replicated 3 times and uses sticky sessions while the dynamic server is replicated 2 times and works on a Round Robin method for Load Balancing. You can change the number of servers directly in docker-compose.yml under the section 'replica' of each server.

## Docker Management GUI

Managing all those docker containers and images can be complicated and generate a lot of problems.

Instead of manually launching all those servers using docker and docker compose commands, it can be easier to use a GUI which will help you with whatever problem you might have. You can launch a GUI using the following command :
```
docker run -d -p 8000:8000 -p *port*:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest -p 9000:9000
```

This will launch a docker container for the GUI which can be accessed on https://localhost:*port*.

In case you need to shutdown this container, you can run the following commands to stop and delete it :
```
docker stop /portainer
docker rm /portainer
```

### How to use the GUI

Access your GUI on https://localhost:*port*

There you will have to login, or if it's your first time, create an account to login to the service.

This service can only be accessed on your machine so you don't need to worry too much about what you choose for this account.

There on your home page, you'll see your accessible docker environments :

![](https://i.imgur.com/OTdE80t.png)

You can click on your wanted environment, generally "local" is what we want, to manipulate your environment.

### How to build an image

To build an image, you can select the "Images" button and then press on "Build a new image" on the right.

Then you just to select a name for your image and paste your Dockerfile content or upload it.

You can also just build images on your command prompt locally which could be easier

### How to run one simple server

To run one of the servers (static or dynamic), you can click on the "Containers" button which display a list of the currently running containers and you can press the "Add container" button on the top right.

You can then click on "Advanced Mode" to use local images and deploy your container. Name is optional.

**If you made modifications to your container files, don't forget to rebuild your image before running the container!**

### How to run a Docker compose

To run a docker compose on the GUI, we need to click on the "Stacks" button where we can add a Stack which will be our Docker compose.

You can then press "Add stack" on the top right and either paste the content or upload your compose.yml.

Once it's done you can run and manage your compose as well as edit it live, you can dynamically add or remove server instances.

**If you made modifications, be sure that your images have been rebuilt where needed!**
