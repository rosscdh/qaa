FROM node:9.11-alpine as build

EXPOSE 4200

WORKDIR /usr/src/app

RUN npm install -g @angular/cli && \
    npm link @angular/cli

COPY . .

ENTRYPOINT ["npm"]
CMD ["start"]