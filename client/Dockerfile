# Stage 1
FROM node:11-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM nginx:1.16-alpine

COPY --from=node /usr/src/app/dist/gabesite-client /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf