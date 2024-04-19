let notes = [
  {
    id: 1,
    name: "Add a title to your note",
    description:
      "You can choose a color while adding notes. The notes you add will not be lost even if you refresh the page.",
    trass: "fa-regular fa-trash-can",
  },
];

const namebtn = document.querySelector(".name");
namebtn.addEventListener("submit", function () {
  console.log(this.value);
});

const main = document.querySelector(".main");
const cards = document.createElement("div");
cards.className = "cards";
notes.forEach((el) => {
  const card = document.createElement("div");
  card.className = "card";

  const h4 = document.createElement("h4");
  h4.innerText = el.name;
  const trash = document.createElement("i");
  trash.className = "fa-regular fa-trash-can";

  const p = document.createElement("p");
  p.innerText = el.description;

  h4.append(trash);
  card.append(h4, p);
  cards.append(card);
});
main.append(cards);
