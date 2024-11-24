FROM python:3.12

<<<<<<< HEAD
# Установим переменную окружения для Python
ENV PYTHONUNBUFFERED=1

# Рабочая директория будет /code
WORKDIR /code

# Копируем только файл с зависимостями и устанавливаем их
COPY requirements.txt /code/
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

# Копируем всю папку backend в контейнер в директорию /code/
COPY ./backend /code/

# Устанавливаем gunicorn, если он нужен
RUN pip install gunicorn

# Открываем порт для веб-сервера
EXPOSE 8000

# Команда для запуска Django-сервера
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
=======
ENV PYTHONUNBUFFERED=1

WORKDIR /code/backend/

COPY requirements.txt /code/
RUN pip install gunicorn && \
    pip install --upgrade pip && \
    pip install --no-cache-dir -r /code/requirements.txt


COPY . /code/backend/

EXPOSE 8000

CMD ["gunicorn", "-b", "0.0.0.0:8000", "mysite.wsgi:application"]
>>>>>>> 0ceaeb2a1847cebec4949d55efd84f20908cd482
