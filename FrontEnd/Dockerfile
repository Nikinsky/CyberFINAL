# Этап сборки (build) с использованием Node.js
FROM node:alpine as build

# Устанавливаем рабочую директорию
WORKDIR /code

# Копируем package.json и package-lock.json в контейнер
COPY ./package.json ./package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь код проекта
COPY . .

# Строим приложение
RUN npm run build

# Этап с Nginx для сервировки статических файлов
FROM nginx:stable-alpine

# Копируем собранные файлы фронтенда из первого этапа в директорию Nginx
COPY --from=build /code/dist /usr/share/nginx/html

# Копируем кастомный конфигурационный файл nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Открываем порт 80 для доступа к приложению
EXPOSE 3000

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
