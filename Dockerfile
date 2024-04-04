# Stage 1: Build Angular application
FROM node:14.17.0 as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . .

RUN ng build --prod

# Stage 2: Serve Angular application using Nginx
FROM nginx:alpine

COPY --from=build /usr/src/app/dist/frontend /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
