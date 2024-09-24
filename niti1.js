const faceButton = document.querySelector('.face-button');
const faceContainer = document.querySelector('.face-container');
const containerCoords = document.querySelector('#container');
const mouseCoords = containerCoords.getBoundingClientRect();

faceButton.addEventListener('mousemove', function(e) {
  const mouseX = e.pageX - containerCoords.offsetLeft;
  const mouseY = e.pageY - containerCoords.offsetTop;
  
  gsap.to(faceButton, {
    duration: 0.3,
    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 50,
    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 50,
    ease: "power4.out"
  });

  gsap.to(faceContainer, {
    duration: 0.3,
    x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 25,
    y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 25,
    ease: "power4.out"
  });
});

faceButton.addEventListener('mouseenter', function() {
  gsap.to(faceButton, {
    duration: 0.3,
    scale: 0.975
  });
});

faceButton.addEventListener('mouseleave', function() {
  gsap.to(faceButton, {
    duration: 0.3,
    x: 0,
    y: 0,
    scale: 1
  });
  
  gsap.to(faceContainer, {
    duration: 0.3,
    x: 0,
    y: 0,
    scale: 1
  });
});
