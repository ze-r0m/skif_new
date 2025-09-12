FROM node:20-alpine AS build

ARG HTTP_PROXY
ARG HTTPS_PROXY
ENV HTTP_PROXY=$HTTP_PROXY
ENV HTTPS_PROXY=$HTTPS_PROXY

WORKDIR /app

COPY package*.json ./

# Устанавливаем ВСЕ зависимости
RUN npm config set proxy $HTTP_PROXY
RUN npm config set https-proxy $HTTPS_PROXY
RUN npm install

COPY . .

# Собираем проект
RUN npm run build

# Этап отдачи через Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
