import requests
import threading
import time
import importlib

# Función para obtener el estado actual del servidor
def obtener_estado_servidor():
    try:
        response = requests.get("http://127.0.0.1:3000/obtener_estado")
        if response.status_code == 200:
            return response.json()
        else:
            print("Error al obtener el estado del servidor:", response.status_code)
            return None
    except Exception as e:
        print("Excepción al obtener el estado del servidor:", str(e))
        return None

# Función para cargar y ejecutar el script correspondiente al estado
def ejecutar_script(estado):
    try:
        # Importar el módulo correspondiente al estado
        modulo = importlib.import_module(estado)
        # Llamar a la función principal del módulo (se asume que se llama main)
        modulo.main()
    except ModuleNotFoundError:
        print(f"El módulo para el estado {estado} no se encontró.")
    except AttributeError:
        print(f"El módulo {estado} no tiene una función main.")
    except Exception as e:
        print(f"Error al ejecutar el script para el estado {estado}: {str(e)}")

# Ciclo principal para verificar y ejecutar el script según el estado actual
def ciclo_principal():
    estado_anterior = None
    while True:
        estado_actual = obtener_estado_servidor()
        print("Estado actual:", estado_actual)
        if estado_actual and estado_actual != estado_anterior:
            estado_anterior = estado_actual
            ejecutar_script(estado_actual)
            imprimir_json(estado_actual)

        time.sleep(5)  # Espera 5 segundos antes de verificar el estado nuevamente

def imprimir_json(json_data):
    if json_data:
        print("JSON obtenido del servidor:")
        print(json_data)
    else:
        print("No se pudo obtener el JSON del servidor.")

if __name__ == "__main__":
    ciclo_principal()
