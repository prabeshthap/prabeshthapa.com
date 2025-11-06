window.addEventListener("load", function () {
  let loader = document.getElementById("cooking");
  let title = document.querySelector("h1");
  let content = document.getElementById("content");

  // Keep loader visible for 5 seconds
  setTimeout(() => {
    // Add fade-out effect
    loader.style.transition = "opacity 1s ease";
    title.style.transition = "opacity 1s ease";

    loader.style.opacity = "0";
    title.style.opacity = "0";

    // After fade-out, hide loader and show content
    setTimeout(() => {
      loader.style.display = "none";
      title.style.display = "none";
      content.style.display = "block";
    }, 1000); // wait 1s for fade effect
  }, 5000); // 5 seconds before fading out
});







function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// for Typewriter effect

const texts = [
    "WEB DEVELOPER",
    "WEB DESIGNER",
    "SCRIPT WRITER",
    "GRAPHIC DESIGNER"

]

let speed = 100;

const textElements = document.querySelector(".typewriter-text")

let textIndex = 0;
let charcterIndex = 0;

function typeWriter() {
    if(charcterIndex < texts[textIndex].length){
        textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
        charcterIndex++;
        setTimeout(typeWriter, speed); 
    }
    else{
        setTimeout(eraseText, 1000)
    }
}

function eraseText() {
    if(textElements.innerHTML.length > 0){
        textElements.innerHTML = textElements.innerHTML.slice(0,-1)
        setTimeout(eraseText, 50)
    }
    else{
        textIndex = (textIndex + 1) % texts.length;
        charcterIndex = 0;
        setTimeout(typeWriter,500)
    }
}


window.onload = typeWriter;




