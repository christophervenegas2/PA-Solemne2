#Nivel 0, El equipo

FROM ubuntu:18.04 as builder

#Nivel 1, El nodejs
FROM node:latest as node

WORKDIR /app

COPY . .

RUN npm install -g @angular/cli

RUN npm install 

RUN npm run build --prod --aot 

#Nivel 2, El Nginx

FROM nginx:latest

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/dist/solemne2 .

COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

#Como correr Dockerfile? 
#1.-[sudo] docker build . -t solemne2:latest 
#2.-[sudo] docker run -d -p 8080:80 solemne2:latest