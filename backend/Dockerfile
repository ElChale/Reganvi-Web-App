# Usa la imagen base de Python
FROM python:3-slim

# Establece el directorio de trabajo en /app
WORKDIR /Reganvi-Web-App/backend

# Copia el archivo requirements.txt al contenedor
COPY requirements.txt .

# Instala los paquetes del requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copia el resto de la aplicación al contenedor
COPY . .

# Ejecuta las migraciones
RUN python manage.py migrate

# Crea un superusuario (debe ser cambiado por el nombre de usuario, correo y contraseña que se desee)
# RUN echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.create_superuser('jamcy', 'admin@example.com', '123')" | python manage.py shell

# Comando para ejecutar la aplicación
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]


