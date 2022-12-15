# DAI-HTTP-INFRA
Labo de DAI sur l'HTTP

# Static HTTP Server

In this part, we'll see how to setup a static HTTP server on our machine.

## Prerequisite

- Have docker installed (https://docs.docker.com/get-docker/)
- Pull PHP & HTTPD images from the Dockerhub
([PHP](https://hub.docker.com/_/php/) & [HTTPD](https://hub.docker.com/_/httpd))

## Configuration

### Docker
Everything you need is located in the folder *docker-images*.

The first thing you have to do is to build the image using our prepared Dockerfile.

In a terminal run the following commands in the *docker-images* folder:

```
docker build -t dai/apache_php .
docker run -p 9090:80 dai/apache_php
```
You should see something like this:
![](https://i.imgur.com/QVezukO.png)

In this case, we'll use the port 9090 to access the web interface.

You can choose another open port if you need to.

Now you should have a running container using the php image.

You can check with the following command:
```
docker ps
```
### Apache
Apache configurations are located in */etc/apache2/*.

For example, in /etc/apache2/sites-availables:

You can see all virtual hosts, for the moment there is only one and we can check the configuration by running the following command:
```
more 000-default.conf
```
At this point, we'll use the native configuration of Apache.

### Web template

For this project we're using this [template](https://startbootstrap.com/template/full-width-pics)

Everything is located in *docker-images\content*.

### Web interface

Now that everything has been setted up, you can access to our Web interface using any browser then localhost:9090

You should see something like this:
![](https://i.imgur.com/AZ7sJfH.png)

## Useful links

[Apache Documentation](https://httpd.apache.org/docs/)
