const paragraph = document.createElement("p");
paragraph.textContent = "New paragraph";
paragraph.classList.add("special");
console.log(paragraph);

const image = document.createElement("img");
image.src = "https://picsum.photos/500";
image.alt = "Nice photo";

const div = document.createElement("div");
div.classList.add("wrapper");
console.log(div);

div.appendChild(paragraph);
div.appendChild(image);

document.body.appendChild(div);

// oh shoot! we need to add somethint to the top. like a heading!
const heading = document.createElement("h2");
heading.textContent = "Cool Things";

div.insertAdjacentElement("beforebegin", heading);

// <ul>
// <li>One</li>
// <li>two</li>
// <li>three</li>
// <li>four</li>
// <li>five</li>
// </ul>

const list = document.createElement("ul");
const li = document.createElement("li");
li.textContent = "Three";
list.appendChild(li);

document.body.insertAdjacentElement("afterbegin", list);

const li5 = document.createElement("li");
li5.textContent = "Five";
list.append(li5);

const li1 = li5.cloneNode(true);
li1.textContent = "One";
list.insertAdjacentElement("afterbegin", li1);

const li4 = document.createElement("li");
li4.textContent = "Four";
li5.insertAdjacentElement("beforebegin", li4);

const li2 = document.createElement("li");
li2.textContent = "Two";
li1.insertAdjacentElement("afterend", li2);

// const li2 = document.createElement("li");
// li2.textContent = "Two";
// li1.insertAdjacentElement("afterend", li2);

// const li3 = document.createElement("li");
// li3.textContent = "Three";
// li2.insertAdjacentElement("afterend", li3);

// const li4 = document.createElement("li");
// li4.textContent = "Four";
// li3.insertAdjacentElement("afterend", li4);

// const li5 = document.createElement("li");
// li5.textContent = "Five";
// li4.insertAdjacentElement("afterend", li5);
