console.log("forms.js init");

const google = document.querySelector(".google");

google.addEventListener("click", function(event) {
  const shouldChangePage = confirm(
    "This website might be malicious! Do you wish to proceed?"
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("Sorry man");
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}
signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);

const photo = document.querySelector(".photo");

function handlePhotoClick(event) {
  if (event.type === "click" || event.key === "Enter") {
    console.log("You clicked the photo");
  }
}

photo.addEventListener("click", handlePhotoClick);
photo.addEventListener("keyup", handlePhotoClick);
