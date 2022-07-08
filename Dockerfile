FROM node:18-alpine3.15

LABEL manteiner "Pedro Ivo <pedroicbarbos@gmail.com>"

WORKDIR /docker-activity

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "run", "start" ]