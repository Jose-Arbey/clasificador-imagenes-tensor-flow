# clasificador-imagenes-tensor-flow

## Sobre el prototipo
Este clasificador de imágenes es una prueba realizada para testear las capacidades de dos redes neuronales de TensorFlow
- Mobilenet
- KNN-Classifier

Utiliza únicamente tecnologías HTML, CSS y Javascript.
Este repositorio y sus archivos solo son de uso demostrativo. No es una aplicación en producción.

## Cómo probarla
Solo necesitas entrar desde tu teléfono celular o desde tu computadora a la siguiente dirección
https://jose-arbey.github.io/clasificador-imagenes-tensor-flow/

Una vez dentro debes esperar a que la aplicación solicite permiso para usar la cámara del dispositivo.
Aceptar los permisos para poder visualizar el frame de la cámara.
Una vez hecho esto la aplicación comenzara a predecir lo que ve y el grado de probabilidad calculado.
Al mismo tiempo se puede entrenar a la red neuronal con los botones disponibles.

Tines 4 de las siguientes opciones:
1. Botella de Agua
2. Celular
3. Cubrebocas
4. Teclado

La intención es que puedas colocar frente a la cámara **uno de estos 4 objetos**, una vez que el objeto esté frente a ella, pulsa el botón relacionado al objeto que le estas mostrando.
Con esto estamos diciendole a la red neuronal que ese objeto pertenece a esa clasificación.
Puedes mostrar otro de los 4 objetos de las opciones **que sea diferente** y pulsar el botón relacionado al objeto otra vez.
Ahora puedes intercambiar entre los objetos que le has enseñado, podrás ver que la red neuronal identifica qué objeto de los que utilizaste es el que esta viendo a través de la cámara.

Es una aplicación bastante sencilla en realidad, pero que hace uso de TensorFlow.js para hacer predicciones con cierto grado de probabilidad.
