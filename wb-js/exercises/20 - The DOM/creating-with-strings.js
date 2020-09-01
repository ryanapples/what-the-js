const item = document.querySelector(".item");

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cool pic`;

const myHTML = `
  <div class="wrapper">
    <h2>Header: ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

// turn a string into a DOM element
const myFragment = document.createRange().createContextualFragment(myHTML);

document.body.appendChild(myFragment);
