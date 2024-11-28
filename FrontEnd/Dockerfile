# Dockerfile для React Frontend
# frontend/Dockerfile
FROM node:18-alpine

WORKDIR /app

# Копирование package.json и установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование кода проекта
COPY . .

# Сборка приложения
RUN npm run build

# Команда запуска
CMD ["npm", "start"]