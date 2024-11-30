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


FROM node:18-alpine

WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей
RUN npm install

# Копирование исходного кода
COPY . .

# Открытие порта для разработки
EXPOSE 3000

# Запуск приложения в режиме разработки
CMD ["npm", "start"]