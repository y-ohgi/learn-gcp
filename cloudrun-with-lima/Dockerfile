FROM node:20-slim

WORKDIR /app

COPY package-lock.json package.json /app/

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:debug"]
