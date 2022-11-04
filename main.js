console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const idNode1 = document.getElementById("node1");
idNode1.textContent = `I used the getElementById("node1") method to access this`;

// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const idNode2 = document.getElementsByClassName("node2");
idNode2[0].textContent = `I used the getElementById("node2") method to access this`;
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const idNode3 = document.getElementsByTagName("h3");
for (index in idNode3) {
  idNode3[
    index
  ].textContent = `I used the getElementByTagName("h3") method to access all of these`;
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const prg = document.createElement("p");
prg.textContent = `This node was created using the createElement() method`;
// TODO: Append the created node to the parent node using the element.appendChild() method
const parent = document.querySelector("#parent");
parent.appendChild(prg);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anc = document.createElement("a");
anc.textContent = `I am a <a> tag`;
// BONUS: Add a link href to the <a>
anc.setAttribute(
  "href",
  "https://news.google.com/home?hl=en-US&gl=US&ceid=US:en"
);
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parent.insertBefore(anc, prg);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const newParent = document.querySelector("#exercise-container3");
const oldPrg = document.querySelector("#N1");
const newPrg = document.createElement("p");
newPrg.textContent = `New Child Node`;
newParent.replaceChild(newPrg, oldPrg);
// TODO: Remove the "New Child Node"
setTimeout(() => newParent.removeChild(newPrg), 5000);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [
  "apples",
  "bananas",
  "carrots",
  "dragon fruit",
  "eggplant",
  "fish",
  "grapes",
  "honey",
  "ice bag",
  "juice (any kind)",
];

// TODO: Create an unordered list element
const unlis = document.createElement("ul");
// TODO: Iterate over the array values, and create a list item element for each
list.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  // TODO: Append the new list items to the unordered list element
  unlis.appendChild(li);
});
console.log(unlis);
// TODO: Append the unordered list to the `div#container` under exercise 4
document.querySelector("#container").appendChild(unlis);
/*----------- Exercise #5: DOM EVENTS --------------*/
// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
function show() {
  // -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
  let modalContainer = document.createElement("div");
  let modalCard = document.createElement("div");
  let h2 = document.createElement("h2");
  let p = document.createElement("p");
  let closeBtn = document.createElement("button");

  h2.textContent = "Modal Header";
  p.textContent = "This is the main content of our modal";
  closeBtn.textContent = "Close";

  // add an event listener to close button
  closeBtn.addEventListener("click", () => {
    document.body.removeChild(modalContainer);
  });

  modalCard.append(h2, p, closeBtn);
  modalCard.classList.add("modal-card");

  modalContainer.id = "modal";
  modalContainer.appendChild(modalCard);

  document.body.appendChild(modalContainer);
}

let button = document.querySelector("#btn");
button.addEventListener("click", show);
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality
