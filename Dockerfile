FROM tobi312/rpi-nginx
RUN apt-get update \
  && apt-get -y install unzip
ADD dist/home-automation-webapp.zip /usr/share/nginx/html
WORKDIR /usr/share/nginx/html
RUN unzip -o home-automation-webapp.zip \
  && rm home-automation-webapp.zip
