// les selecteurs
// document.querySelector("h4").style.background = "yellow";

// const baliseHtml = document.querySelector("h4");

// console.log(baliseHtml);

// baliseHtml.style.background = "yellow";

// les click event
const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-click");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

// mouse effect
const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);
window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25% , -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50% , -50%)";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0, 0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------------------------------

// keyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.querySelector("#key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + "mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;

  if (e.key === "j") {
    keypressContainer.style.background = "pink";
  } else if (e.key === "h") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "red";
  }

  if (e.key === "z") {
    ring(e.key);
  }
});

//--------------------------------
// scroll Event
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  //   console.log(window.scrollY);

  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//--------------------------------------------

// form event
const inputName = document.querySelector('input[type = "text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
  //   console.log(language);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //   console.log(cgv.checked);

  if (cgv.checked) {
    //affiche le contenu des variables
    document.querySelector("form div ").innerHTML = `
    <h3> Pseudo : ${pseudo} </h3>
    <h4>language: ${language} </h4> 
    
    `;
  } else {
    alert("veuillez accepter les CGV");
  }
});

//-------------------------------------
// load event
// window.addEventListener("load", () => {
//   console.log("document charge");
// });

//------------------------------------------
//le foreach
// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//   box.addEventListener("click", (e) => {
//     e.target.style.transform = "scale(0.6)";
//   });
// });

//----------------------------------------
// addEventListener vs onclick

// document.body.onclick = () => {
//   console.log("salut");
// };

// bubling
// document.body.addEventListener("click", () => {
//   console.log("click 1");
// });

// usecapture
// document.body.addEventListener(
//   "click",
//   () => {
//     console.log("click 2");
//   },
//   true
// );

//-----------------------------
// stop propagation
// questionContainer.addEventListener("click", (e) => {
//   alert("test");
//   e.stopPropagation();
// });

// removeEventListenner
//--------------------------------------------------
//Le BOM

// console.log(window.innerHeight);
// console.log(window.scrollY);

// window.open("http://google.com", "cours js", "height=600, width=800");
// // window.close();

// alert("hello");

// confirm
btn2.addEventListener("click", () => {
  confirm("voulez vous vraiment vous tromper ?");
});

let answer;
// prompt
btn1.addEventListener("click", () => {
  answer = prompt("entrez votre nom");

  questionContainer.innerHTML += "<h3> Bravo " + answer + "</h3>";
});

// setTimeout(() => {
//   // logique a executer
//   questionContainer.style.borderRadius = "300px";
// }, 2000);

// setInterval(() => {
//   document.body.innerHTML +=
//     "<div class='box'> <h2> Nouvelle boite </h2> </div>";
// }, 1000);

// navigateur web
// localisation video doom 3h22
// console.log(navigator.userAgent);

// history
// console.log(window.history);

//--------------------------------------------
// setProperty

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
