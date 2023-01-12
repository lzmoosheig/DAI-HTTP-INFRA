FROM php:7.2-apache
EXPOSE 80

RUN a2enmod proxy proxy_http
COPY apache_conf/000-default.conf /etc/apache2/sites-available/
