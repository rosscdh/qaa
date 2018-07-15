# Stage 1
FROM node:8.11.2-alpine as build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM  pierrezemb/gostatic

COPY --from=build /usr/src/app/dist /srv/http

#CMD ["-append-header", "X-GIT_SHA:${GIT_SHA}"]