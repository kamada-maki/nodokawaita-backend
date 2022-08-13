FROM node:18.7.0

RUN yarn global add @nestjs/cli

WORKDIR /api-server
COPY package*.json /api-server/

RUN yarn install
CMD [ "yarn", "run", "start:dev"]
