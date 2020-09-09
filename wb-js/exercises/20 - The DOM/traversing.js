const ryan = document.querySelector(".ryan");

console.log(ryan.children);
console.log(ryan.firstElementChild);
console.log(ryan.lastElementChild);
console.log(ryan.previousElementSibling);
console.log(ryan.nextElementSibling);
console.log(ryan.parentElement);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);

document.body.appendChild(p);
