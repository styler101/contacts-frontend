FROM node:16.17-alpine3.15

ENV LC_ALL=C.UTF-8

WORKDIR /app

COPY . .

RUN yarn 

EXPOSE 3000

CMD yarn start