FROM node:15 as build
WORKDIR /app
COPY package.json index.js ./
RUN npm install

FROM node:15-alpine
EXPOSE 3000
CMD ["npm", "start"]