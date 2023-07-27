let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Licenciada en Psicología y creadora de contenido de arte "@scum.of.boy".')
  .pauseFor(200)
  .deleteChars(10)
  .start();
