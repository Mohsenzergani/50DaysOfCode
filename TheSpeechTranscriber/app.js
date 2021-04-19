// https://caniuse.com/?search=speech%20recognition

const transcription = document.querySelector(".transcription");
let speechPara = document.createElement("p");

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognitionSpeech = new window.SpeechRecognition();
recognitionSpeech.interimResults = true;

recognitionSpeech.addEventListener("result", (e) => {
  const speechToText = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

  speechPara.innerText = speechToText;
  transcription.appendChild(speechPara);

  if (e.results[0].isFinal) {
    speechPara = document.createElement("p");
  }
});

recognitionSpeech.addEventListener("end", () => {
  recognitionSpeech.start();
});

recognitionSpeech.start();
