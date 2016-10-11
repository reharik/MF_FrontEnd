FROM mf_node:latest

MAINTAINER reharik@gmail.com

ADD ./package.json ./package.json
#ADD ./config ./config

RUN npm install -q

ADD ./app /$HOME/app
