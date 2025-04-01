# Suma de Matrices

Este proyecto implementa una aplicación web para realizar sumas de matrices. Los
usuarios pueden ingresar las dimensiones de las matrices, completar los valores
y obtener la matriz resultante de la suma.

El proyecto está disponible en dos versiones:

- **JavaScript con Express**
- **Python con Flask**

## Tabla de Contenidos

- [Requisitos](#requisitos)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalacion)
- [Ejecución](#ejecucion)
- [Uso](#uso)
- [Tecnologías](#tecnologias)

## Requisitos

### Versión JavaScript/Express

- Node.js (v14 o superior)
- npm (incluido con Node.js)

### Versión Python/Flask

- Python 3.7 o superior
- pip (instalador de paquetes de Python)

## Estructura del Proyecto

```
Suma-Matrices/
│── javascript-express/
│   │── public/
│   │── src/
│   │── index.js
│   │── package.json
│
│── python-flask/
│   │── static/
│   │── templates/
│   │── app.py
│   │── requirements.txt
```

## Instalación

### Versión JavaScript/Express

1. Navega al directorio de la versión JavaScript:
   ```sh
   cd javascript-express
   ```
2. Instala las dependencias:
   ```sh
   npm install
   ```

### Versión Python/Flask

1. Navega al directorio de la versión Python:
   ```sh
   cd python-flask
   ```
2. Crea un entorno virtual (opcional pero recomendado):
   ```sh
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```
3. Instala las dependencias:
   ```sh
   pip install -r requirements.txt
   ```

## Ejecución

### Versión JavaScript/Express

Desde el directorio `javascript-express`, ejecuta:

```sh
npm start
```

O bien:

```sh
node index.js
```

La aplicación estará disponible en
[http://localhost:3000](http://localhost:3000)

### Versión Python/Flask

Desde el directorio `python-flask`, ejecuta:

```sh
python index.py
```

La aplicación estará disponible en
[http://localhost:4000](http://localhost:4000)

## Uso

1. Accede a la aplicación a través del navegador.
2. Ingresa el número de filas y columnas para las matrices.
3. Haz clic en "Generar Matrices".
4. Completa los valores en ambas matrices.
5. Haz clic en "Calcular Suma".
6. El resultado de la suma se mostrará en la sección "Resultado".

## Tecnologías

### Versión JavaScript/Express

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Herramientas:** npm, ES Modules

### Versión Python/Flask

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Python, Flask
- **Herramientas:** pip, Jinja2 (motor de plantillas)
