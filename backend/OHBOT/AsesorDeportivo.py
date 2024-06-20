import speech_recognition as sr
import openai
from ohbot import ohbot
import threading
import time
import random
import json
from datetime import datetime

# Tu clave de API de OpenAI
OPENAI_API_KEY = 'proporciona tu clave de API de OpenAI'

# Lista de posibles movimientos aleatorios de Ohbot
MOVIMIENTOS_OHBOT = [
    (ohbot.HEADNOD, random.uniform(1, 8)),
    (ohbot.LIDBLINK, random.uniform(1, 8)),
    (ohbot.HEADTURN, random.uniform(1, 5)),
    (ohbot.EYETURN, random.uniform(1, 9)),
]

def reconocer_voz():
    # Inicializar el reconocedor de voz
    recognizer = sr.Recognizer()

    # Utilizar el micrófono como fuente de audio
    with sr.Microphone() as source:
        print("Escuchando...")
        ohbot.move(ohbot.HEADNOD, 5)  # Ohbot asiente mientras escucha

        # Ajustar el ruido de fondo durante 1 segundo para mejorar la precisión
        recognizer.adjust_for_ambient_noise(source, duration=1)

        # Capturar el audio del micrófono
        audio = recognizer.listen(source)

    try:
        print("Reconociendo voz...")
        # Utilizar el reconocedor de voz de Google para convertir el audio en texto
        texto = recognizer.recognize_google(audio, language="es-ES")
        print("Texto reconocido:", texto)
        return texto
    except sr.UnknownValueError:
        print("No se pudo entender la voz.")
    except sr.RequestError as e:
        print("Error al solicitar los resultados; {0}".format(e))
    return None

def obtener_respuesta(user_input):
    if OPENAI_API_KEY == "":
        return "Por favor, proporciona tu clave de API de OpenAI."

    openai.api_key = OPENAI_API_KEY

    # Añadir instrucciones al asistente para darle una personalidad específica
    instructions = (
        "Eres un asistente deportivo, especializado en proporcionar información, consejos y estadística. "
        "Te apasiona ayudar y siempre ofreces respuestas breves, precisas y entusiastas, ayudando a los usuarios solo puedes hablar de deporte si la pregunta es difrente al deporte indica que no se sabes."
    )

    messages = [
        {"role": "system", "content": instructions},
        {"role": "user", "content": f"{user_input}"}
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo-0301",
        messages=messages
    )

    return response.choices[0].message['content']

def mover_natural():
    # Realizar movimientos aleatorios de Ohbot
    for movimiento, posicion in MOVIMIENTOS_OHBOT:
        ohbot.move(movimiento, posicion)
    time.sleep(random.uniform(1, 5))  # Esperar un tiempo aleatorio entre movimientos

def guardar_conversacion(conversation):
    # Crear un registro de la conversación en formato JSON
    conversation_log = {
        "fecha": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "conversacion": conversation
    }

    # Guardar el registro en un archivo JSON
    with open("conversacion_deportiva.json", "w") as file:
        json.dump(conversation_log, file, indent=4)

def responder_con_voz(respuesta):
    print("Asistente: " + respuesta)

    # Crear un hilo para los movimientos naturales mientras Ohbot habla
    movimiento_thread = threading.Thread(target=mover_natural)
    movimiento_thread.start()

    ohbot.say(respuesta)  # Ohbot dice la respuesta

    # Detener los movimientos naturales después de que Ohbot termina de hablar
    movimiento_thread.join()

def conversar_con_voz():
    conversation = []
    while True:
        user_input = reconocer_voz()
        if user_input is not None:
            if user_input.lower() == "adiós":
                print("Hasta luego!")
                ohbot.say("Hasta luego!")  # Ohbot se despide
                guardar_conversacion(conversation)
                ohbot.close()
                exit()  # Salir del programa
            else:
                response = obtener_respuesta(user_input)
                responder_con_voz(response)
                conversation.append({"user": user_input, "assistant": response})
        else:
            print("No se detectó ninguna entrada de voz.")

# Configurar Ohbot
ohbot.init()

# Ejemplo de uso
conversar_con_voz()
