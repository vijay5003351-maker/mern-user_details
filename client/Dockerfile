FROM node:24-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_APP_API_URL
ENV VITE_API_URL=$VITE_APP_API_URL


RUN npm run build

EXPOSE 5173         

CMD ["npm","run","preview"]
