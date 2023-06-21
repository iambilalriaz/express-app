FROM ubuntu:20.04
WORKDIR /app
COPY . .
RUN wget -NP . https://dokku.com/install/v0.30.7/bootstrap.sh
RUN DOKKU_TAG=v0.30.7 bash bootstrap.sh
RUN cat  ~/.ssh/id_rsa.pub | dokku ssh-keys:add admin
RUN dokku domains:set-global dokku.me
RUN dokku domains:set-global 10.0.0.2

RUN dokku domains:set-global 10.0.0.2.sslip.io

