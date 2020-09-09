const button = document.querySelector(".button");
const coolButton = document.querySelector(".cool");

const buttonClickHandle = () => {
  console.log("button click emitted");
};

const hooray = () => console.log("HOORAY");

button.addEventListener("click", buttonClickHandle);
coolButton.addEventListener("click", hooray);

// Listen on multiple items
const buyButtons = document.querySelectorAll("button.buy");

function handleBuyButtonClick(event) {
  const button = event.target;
  // console.log(button.textContent);
  // console.log(parseFloat(event.target.dataset.price));
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // Stop this event from bubbling up
  // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
});

window.addEventListener(
  "click",
  function() {
    console.log("you clicked the window!");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
  },
  {
    capture: true,
  }
);

const photoEl = document.querySelector(".photo");
photoEl.addEventListener("mouseenter", function(e) {
  console.log(e.currentTarget);
  console.log(this);
});
