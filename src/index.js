const cards = document.querySelectorAll("#card");
const titles = document.querySelectorAll("h1");
const childTitle = document.getElementsByTagName("h1");

const openCard = (card) => {
  cards.forEach((card) => card.classList.remove("min-w-[900px]"));
  card.classList.add("min-w-[900px]");

  titles.forEach((card) => (card.style.display = "none"));
  card.childNodes[1].style.display = "block";
};
