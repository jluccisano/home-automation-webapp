FROM tobi312/rpi-nginx
RUN apt-get update \
  && apt-get -y install unzip
ADD dist/chrono.zip /var/www/html
WORKDIR /var/www/html
RUN unzip -o chrono.zip \
  && rm chrono.zip \
  && rm index.nginx-debian.html
