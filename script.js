let isCardFront = true; // Indicates if the card is in the front position
const card = document.getElementById("card");

card.addEventListener("click", () => {
  card.classList.toggle("is-rotated");
  isCardFront = False;
});

const mailbox = document.getElementById("mailbox");
const itemsContainer = document.getElementById("items");

mailbox.addEventListener("click", () => {
  itemsContainer.classList.toggle("items-open");
});

itemsContainer.addEventListener("transitionend", () => {
  // Check if the items have finished sliding in
  if (itemsContainer.classList.contains("items-open")) {
    isCardFront = false;
  }
});

const items = document.querySelectorAll(".item");
items.forEach((item) => {
  item.addEventListener("click", () => {
    const frontSRC = item.getAttribute("front-image");
    const backSRC = item.getAttribute("back-image");
    document.querySelector(".card-front img").src = "cards/front/" + frontSRC;
    document.querySelector(".card-back img").src = "cards/back/" + backSRC;

    itemsContainer.classList.toggle("items-open");
  });
});

const itemData = {
  nineteenth: {
    frontImage: "IMG_3558.jpg",
    backImage: "notes.jpeg",
  },
  japon: {
    frontImage: "aimjapan.jpg",
    backImage: "courtesy of osaka.png",
  },

  xmas: {
    frontImage: "aim xmas.jpg",
    backImage: "christmas letter.png",
  },

  aimbeingfunny: {
    frontImage: "aim.jpg",
    backImage: "aim.jpg",
  },
  happyNationalGfDay: {
    frontImage: "tood1.png",
    backImage: "tood2.png",
  },

  // Add more items as needed
};

for (const itemName in itemData) {
  const item = document.createElement("div");
  item.classList.add("item");
  item.textContent = itemName;
  item.setAttribute("front-image", itemData[itemName].frontImage);
  item.setAttribute("back-image", itemData[itemName].backImage);
  item.addEventListener("click", () => {
    const frontSRC = item.getAttribute("front-image");
    const backSRC = item.getAttribute("back-image");
    document.querySelector(".card-front img").src = "cards/front/" + frontSRC;
    document.querySelector(".card-back img").src = "cards/back/" + backSRC;
    if (isCardFront == False) {
      card.classList.toggle("is-rotated");
    }
    itemsContainer.classList.toggle("items-open");
  });
  itemsContainer.appendChild(item);
}
