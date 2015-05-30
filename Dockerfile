FROM ubuntu

# Maintainer
MAINTAINER Raif Harik <reharik@gmail.com>

RUN mkdir /public && mkdir /public/js && mkdir /public/css
#ADD ./public /public

EXPOSE 2990

VOLUME /public/js
VOLUME /public/css

