FROM node:11
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 5000
CMD [ "npm", "start" ]