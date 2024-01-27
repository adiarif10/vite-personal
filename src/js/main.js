// typed js
import Typed from "typed.js";

const typed = new Typed("#judul", {
  strings: [
    "Hi, my name is Arif",
    "currently i am learning JavaScript",
    "thank you :)",
  ],
  typeSpeed: 80,
  backDelay: 2000,
  loop: true,
});

// confetti

import confetti from "canvas-confetti";
const myCanvas = document.createElement("canvas");

// posisi confetti
myCanvas.style.width = "100vw";
myCanvas.style.height = "100vh";
myCanvas.style.position = "fixed";
myCanvas.style.inset = 0;
myCanvas.style.zIndex = -10;

document.body.append(myCanvas);

const confettiBtn = document.getElementById("confettiBtn");

confettiBtn.addEventListener("click", () => {
  console.log("confetti");
  const myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });
  myConfetti({
    particleCount: 100,
    spread: 160,
  });
});
