FROM node:carbon

WORKDIR /usr/src/app

RUN [ "npm", "install", "-g", "nodemon" ]

COPY package*.json ./

RUN [ "npm", "install" ]

COPY . .
EXPOSE 3145
CMD npm start