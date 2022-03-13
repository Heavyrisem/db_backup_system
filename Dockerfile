FROM ubuntu

WORKDIR /app
COPY . .

ARG DEBIAN_FRONTEND=noninteractive
RUN apt-get update
RUN apt install nodejs npm wget mysql-client -y
RUN wget https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2004-arm64-100.5.2.deb
RUN apt install ./mongodb-database-tools-ubuntu2004-arm64-100.5.2.deb -y

RUN npm install

CMD ["npm", "start"]
