// Make a div
const div = document.createElement("div");

// add a class of wrapper to it
div.classList.add("wrapper");

// put it into the body
document.body.appendChild(div);

// make an unordered list
const ulHTML = `
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
  </ul>
`;

// add three list items with the words "one, two three" in them
// put that list into the above wrapper
div.innerHTML = ulHTML;

// create an image
const image = document.createElement("img");

// set the source to an image
image.src = "https://picsum.photos/500";
// set the width to 250
image.width = 250;
image.height = 250;
// add a class of cute
image.classList.add("cute");
// add an alt of Cute Puppy
image.alt = "Cute Puppy";
// Append that image to the wrapper
div.appendChild(image);

// with HTML string, make a div, with two paragraphs inside of it
const htmlWithParagraphs = `
  <div class="divWrapper">
    <p>Para 1</p>
    <p>Para 2</p>
  </div>
`;
// put this div before the unordered list from above
const ulElement = div.querySelector("ul");
ulElement.insertAdjacentHTML("afterbegin", htmlWithParagraphs);

// add a class to the second paragraph called warning
const myDiv = document.querySelector(".divWrapper");
myDiv.children[1].classList.add("warning");
// remove the first paragraph
myDiv.children[0].remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  const playerCardHtml = `
    <div class="playerCard">
      <h2>${name.toUpperCase()} = ${age}</h2>
      <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete" type="button">&times; Delete</button>
    </div>
  `;
  return playerCardHtml;
};

// make a new div with a class of cards
const cardsDiv = document.createElement("div");
cardsDiv.classList.add("cards");

// Have that function make 4 cards
let cardsHTML = generatePlayerCard("ryan", 29, 150);
cardsHTML += generatePlayerCard("kiki", 3, 24);
cardsHTML += generatePlayerCard("stella", 3, 30);
cardsHTML += generatePlayerCard("mia", 6, 60);

// append those cards to the div
cardsDiv.innerHTML = cardsHTML;
// put the div into the DOM just before the wrapper element
div.insertAdjacentElement("beforebegin", cardsDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
const buttons = document.querySelectorAll(".delete");
// make delete function
function deleteCard(event) {
  const buttonClicked = event.currentTarget;
  buttonClicked.closest(".playerCard").remove();
}

// loop over them and attach a listener
buttons.forEach((button) => button.addEventListener("click", deleteCard));
