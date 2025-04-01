from flask import Flask, render_template
import logging

# Configurar logging (equivalente a morgan en Express)
logging.basicConfig(level=logging.INFO)

# Crear la aplicación Flask
app = Flask(__name__)

# Ruta principal (equivalente a app.get('/', ...) en Express)
@app.route('/')
def index():
    return render_template('index.html')

# Iniciar el servidor
if __name__ == '__main__':
    app.run(debug=True, port=4000)
    print(f"Servidor corriendo en http://localhost:4000")