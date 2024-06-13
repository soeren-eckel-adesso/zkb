# build environment
FROM node:13.10.1 as builder
LABEL maintainer="Peter Ludwig"
RUN mkdir /app
COPY package*.json /app/
COPY tsconfig*.json /app/
WORKDIR /app
RUN npm ci
COPY apps/web-adesso-demo /app
COPY libs/.. /app
COPY styles/.. /app
COPY . /app
RUN npm run docker:web-adesso-demo:build-web

## now, the app runs in its own dedicated container
##FROM node:12-alpine
FROM nginx:1.16.1 AS frontend-browser
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/apps/web-adesso-demo /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


FROM node:13.10.1-alpine AS ssr-server
COPY --from=builder /app/dist /app/dist/
COPY /package.json /app/package.json
WORKDIR /app
EXPOSE 4200
CMD npm run serve:web-adesso-demo:docker-ssr
