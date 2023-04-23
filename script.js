const inpt = document.querySelector(".input");
const btn = document.querySelector(".footer-btn");
const inputDiv = document.querySelector(".input-div");
const error = document.querySelector(".error-p");

let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", () => {
  console.log(inpt.value);
  if (!regex.test(inpt.value)) {
    error.style.display = "block";
    inpt.style.border = "1px solid #FF4343";
  } else {
    inpt.style.border = "1px solid #00252e";
    error.style.display = "none";
  }
});
