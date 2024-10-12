

AOS.init({
    duration: 1200, 
  });
  

var app = document.getElementById('typewriter').querySelector('.text-gradient');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Bringing ideas to life through Front-End development')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Crafting modern web experiences')
    .pauseFor(2500)
    .deleteAll()
    .start();


