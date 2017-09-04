FROM tobi312/rpi-nginx
RUN apt-get update \
  && apt-get -y install unzip
ADD dist/home-automation-webapp.zip /var/www/html
WORKDIR /var/www/html
RUN unzip -o home-automation-webapp.zip \
  && rm home-automation-webapp.zip \
  && rm index.nginx-debian.html
