FROM node:12-alpine

# Create Directory for the Container
WORKDIR /usr/src/node-typescript-template

RUN apk add --no-cache bash

RUN apk add --no-cache tzdata 
ENV TZ=Etc/UTC
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Only copy the package.json file to work directory
COPY package.json package-lock.json ./
# Install all Packages
RUN npm install
# Copy all other source code to work directory
COPY . ./
# TypeScript
RUN npm run gcp-build
# Start
# EXPOSE 80

# ENV MODE=timely

# CMD [ "npm", "start" ]
