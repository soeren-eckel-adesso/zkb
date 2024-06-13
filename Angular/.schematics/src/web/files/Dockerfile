# build environment
FROM node:13.10.1 as builder
LABEL maintainer="Peter Ludwig"
RUN mkdir /app
COPY package*.json /app/
WORKDIR /app
RUN npm ci
COPY apps/web-<%= name %> /app
COPY libs/.. /app
COPY styles/.. /app
COPY . /app
RUN npm run test:lint
RUN npm run build:ssr

## now, the app runs in its own dedicated container
##FROM node:12-alpine
FROM nginx:1.16.1 AS frontend-browser
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist/apps/web-<%= name %> /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


FROM node:13.10.1-alpine AS ssr-server
COPY --from=builder /app/dist /app/dist/
COPY /package.json /app/package.json
WORKDIR /app
EXPOSE 4200
CMD npm run serve:web-<%= name %>:docker-ssr








#COPY --from=buildbuilder /app/dist/out/ /usr/share/nginx/html
# Copy the default nginx.conf provided by tiangolo/node-frontend
#COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf

# start app
#CMD ng serve --host 0.0.0.0

#LABEL maintainer="Peter Ludwig"
#
#RUN mkdir /usr/src/app
#WORKDIR /usr/src/app
#ENV PATH /usr/src/app/node_modules/.bin:$PATH
#
#COPY package.json /usr/src/app/package.json
#
#RUN npm install --silent
#RUN npm install react-scripts@3.4.1 -g --silent
#COPY . /usr/src/app
#RUN npm run build
#
## production environment
#FROM nginx:stable
#
#LABEL maintainer="David Hall Adesso SE"
#
#COPY --from=builder /usr/src/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD nginx -g 'daemon off;'
