FROM node:10

WORKDIR /opt/example
ADD package.json package-lock.json ./
RUN npm install
ADD . .
RUN npm run build
EXPOSE 8080
CMD npm run start
