FROM php:7.2-apache

RUN apt-get update && \
  apt-get install -y vim
  
RUN a2enmod proxy proxy_http

COPY apache_conf/000-default.conf /etc/apache2/sites-available/
