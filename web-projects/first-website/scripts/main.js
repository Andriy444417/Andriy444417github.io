const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Large_coat_of_arms.PNG") {
    myImage.setAttribute("src", "images/4468.JPG");
  } else {
    myImage.setAttribute("src", "images/Large_coat_of_arms.PNG");
  }
});
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Вітаємо на нашій платформі, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Вітаємо на нашій платформі, ${storedName}`;
  }

  myButton.addEventListener("click", () => {
    setUserName();
  });