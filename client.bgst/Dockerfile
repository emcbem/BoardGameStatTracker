FROM node:20-alpine as builder
WORKDIR /app
COPY package.json .
RUN NODE_ENV=development npm i
COPY . .
ENV VITE_URL "https://api.bgst.duckdns.org"
RUN npm run build

FROM nginx:1.27.0

RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html

COPY default.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "nginx", "-g", "daemon off;" ]