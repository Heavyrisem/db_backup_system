FROM ubuntu

WORKDIR /app
COPY . .

RUN apt-get update
RUN apt install mongo-tools mysql-client -y

RUN npm install

CMD ["npm", "start"]
