
# Dockerfile для Nginx
FROM nginx:alpine

# Копирование кастомных конфигурационных файлов
COPY nginx.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Открытие порта 80 для HTTP
EXPOSE 80

# Запуск nginx с параметрами демона
CMD ["nginx", "-g", "daemon off;"]
