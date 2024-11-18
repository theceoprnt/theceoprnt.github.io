const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/flag.jpg") {
    myImage.setAttribute("src", "images/emblem.png");
  } else {
    myImage.setAttribute("src", "images/flag.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");

  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Салом, ${myName}`;
  }
}  

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Салом, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
  