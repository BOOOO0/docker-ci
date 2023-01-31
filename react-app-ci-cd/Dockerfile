FROM node:alpine as builder

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

#####

FROM nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html