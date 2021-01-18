let net;

const webcamElement = document.getElementById('webcam')
const classifier = knnClassifier.create()

async function app(){

    net = await mobilenet.load();

    webcam = await tf.data.webcam(webcamElement);

    while(true){
      const img = await webcam.capture();
      const result = await net.classify(img);
      const activation = net.infer(img, "conv_preds");

      let result2;

      try {
        result2 = await classifier.predictClass(activation)
      }catch {
        result2 = {};
      }

      const classes = ["Botella de Agua", "Celular", "Cubreboca", "Teclado"];

      try {
        document.getElementById('console2').innerHTML = `
        <p><strong>Predicción:</strong>${classes[result2.label]}</p>
        <p><strong>Probabilidad:</strong>${((result2.confidences[result2.label])*100).toFixed(2)}</p>
        `;
        } catch (error) {
          document.getElementById("console2").innerHTML=`<p>No me has entrenado aun no puedo ver nada</p>`;
        }

      document.getElementById('console').innerHTML =  `${result[0].className}`;
      document.getElementById('console-1').innerHTML =  `${(result[0].probability*100).toFixed(2)}`;

      img.dispose();

      await tf.nextFrame();
    }
}

async function addExample(classId) {
  const img = await webcam.capture()
  const activation = net.infer(img, true);
  classifier.addExample(activation, classId);

  img.dispose();
}

app();