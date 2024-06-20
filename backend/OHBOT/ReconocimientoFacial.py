import cv2
from ohbot import ohbot

# Inicializar Ohbot
ohbot.init()

def realizar_movimientos_iniciales():
    # Movimientos iniciales de Ohbot antes de la detección facial
    ohbot.move(ohbot.HEADTURN, 1)
    ohbot.playSound('spring', untilDone=True)
    ohbot.say("¡Hola! Soy Ohbot. Estoy listo para reconocer rostros.", untilDone=False)
    ohbot.wait(1)
    ohbot.move(ohbot.HEADTURN, 8)
    ohbot.wait(1)
    ohbot.move(ohbot.HEADTURN, 6)
    ohbot.wait(1)
    ohbot.move(ohbot.HEADNOD, 1)
    ohbot.wait(2)
    ohbot.move(ohbot.HEADNOD, 9)

def reconocimiento_facil():
    # Inicializar el clasificador frontal de Haar para detección de rostros
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

    # Inicializar la cámara
    cap = cv2.VideoCapture(0)

    # Bandera para indicar si se ha detectado un rostro
    rostro_detectado = False

    while True:
        # Capturar el fotograma de la cámara
        ret, frame = cap.read()
        if not ret:
            continue

        # Convertir el fotograma a escala de grises para la detección de rostros
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        # Detectar rostros en el fotograma
        faces = face_cascade.detectMultiScale(gray, scaleFactor=1.3, minNeighbors=5, minSize=(30, 30))

        # Iterar sobre los rostros detectados
        for (x, y, w, h) in faces:
            # Dibujar un rectángulo alrededor de cada rostro detectado
            cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)
            
            # Verificar si es la primera vez que se detecta un rostro
            if not rostro_detectado:
                print("Rostro detectado en las coordenadas (x={}, y={})".format(x, y))
                ohbot.say("¡Hola! Veo que hay alguien aquí.")
                rostro_detectado = True

        # Mostrar el fotograma con los rostros detectados
        cv2.imshow('Reconocimiento Facial', frame)

        # Salir del bucle si se presiona 'q'
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Liberar la cámara y cerrar la ventana
    cap.release()
    cv2.destroyAllWindows()

    # Finalizar Ohbot
    ohbot.close()

# Realizar movimientos iniciales de Ohbot antes de iniciar la detección facial
realizar_movimientos_iniciales()

# Llamar a la función para iniciar el reconocimiento facial
reconocimiento_facil()
