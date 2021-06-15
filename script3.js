const grid = document.querySelector(".grid");
const h1 = document.querySelector(".h1");
grid.classList.remove("grid");
grid.classList.add("grid3");

const timer = document.querySelector(".timer");

let time = 50;
function timeFunction() {
  setTimeout(() => {
    setInterval(() => {
      if (time <= -1) {
        h1.innerHTML = "VAQTINGIZ TUGADI";
        time = 0;
        h1.classList.add("center");
        document.body.removeChild(grid);
      }
      timer.innerHTML = time + "s";
      time -= 1;
    }, 1000);
  }, 2000);
}
timeFunction();

let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

let randomURL = Math.floor(Math.random() * 50);

const cardArray = [
  {
    name: "black",
    img: `https://picsum.photos/id/${randomURL + 8}/150/150`,
  },
  {
    name: "black",
    img: `https://picsum.photos/id/${randomURL + 8}/150/150`,
  },
  {
    name: "kariy",
    img: `https://picsum.photos/id/${randomURL + 9}/150/150`,
  },
  {
    name: "kariy",
    img: `https://picsum.photos/id/${randomURL + 9}/150/150`,
  },
  {
    name: "lolalo",
    img: `https://picsum.photos/id/${randomURL + 10}/150/150`,
  },
  {
    name: "lolalo",
    img: `https://picsum.photos/id/${randomURL + 10}/150/150`,
  },

  {
    name: "eynshteyn",
    img: `https://picsum.photos/id/${randomURL + 11}/150/150`,
  },
  {
    name: "eynshteyn",
    img: `https://picsum.photos/id/${randomURL + 11}/150/150`,
  },

  {
    name: "mult",
    img: `https://picsum.photos/id/${randomURL + 12}/150/150`,
  },
  {
    name: "mult",
    img: `https://picsum.photos/id/${randomURL + 12}/150/150`,
  },

  {
    name: "red",
    img: `https://picsum.photos/id/${randomURL + 13}/150/150`,
  },
  {
    name: "red",
    img: `https://picsum.photos/id/${randomURL + 13}/150/150`,
  },

  {
    name: "saru",
    img: `https://picsum.photos/id/${randomURL + 14}/150/150`,
  },
  {
    name: "saru",
    img: `https://picsum.photos/id/${randomURL + 14}/150/150`,
  },

  {
    name: "smile",
    img: `https://picsum.photos/id/${randomURL + 15}/150/150`,
  },
  {
    name: "smile",
    img: `https://picsum.photos/id/${randomURL + 15}/150/150`,
  },
  {
    name: "yellow",
    img: `https://picsum.photos/id/${randomURL + 16}/150/150`,
  },
  {
    name: "yellow",
    img: `https://picsum.photos/id/${randomURL + 16}/150/150`,
  },
  {
    name: "wow",
    img: `https://picsum.photos/id/${randomURL + 17}/150/150`,
  },
  {
    name: "wow",
    img: `https://picsum.photos/id/${randomURL + 17}/150/150`,
  },
];

cardArray.sort(() => 0.5 - Math.random());

function cardBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    let card = document.createElement("img");
    card.setAttribute("src", cardArray[i].img);
    setTimeout(() => {
      card.setAttribute("src", "images/labirint.jpg");
      card.classList.add("animation");
    }, 3000);
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    grid.appendChild(card);
  }
  // <img src="images/labirint.jpg" data-id"[0,1,2,3,4,5,6,7,8,9,10,11]"></img>
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  // <img data-id="bosilgan soni[0,...,11]"></img>
  cardsChosen.push(cardArray[cardId].name);
  // cardArray[bosilgan cardning data-idsidagi raqami].name
  cardsChosenId.push(cardId);
  // bosilgan cardning data-idsi qaytadi
  this.setAttribute("src", cardArray[cardId].img);
  // src=" cardArray[data-idsidagi].img "
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 100);
    if (cardArray[cardId].name === 2) {
      setTimeout(checkForMatch, 100);
    }
  }

  // return cardning indexi && cardning namesi && cardning img
}

function checkForMatch() {
  let cards = document.querySelectorAll("img"); //hamma imglar
  const optionOneId = cardsChosenId[0]; //birinchi bosilgan cardning soni
  const optionTwoId = cardsChosenId[1]; //ikkinchi bosilgan cardning soni
  if (cardsChosen[0] === cardsChosen[1]) {
    // ikkita tanlangan cardlar teng bo'lsa ularga qo'sh src="images/white.jpg"
    cardsWon.push(cardsChosen);
    setTimeout(() => {
      cards[optionOneId].classList.add("none");
      cards[optionTwoId].classList.add("none");
      cards[optionOneId].toggleAttribute("src");
      cards[optionTwoId].toggleAttribute("src");
    }, 300);
  } else {
    setTimeout(() => {
      cards[optionOneId].setAttribute("src", "images/labirint.jpg");
      cards[optionTwoId].setAttribute("src", "images/labirint.jpg");
    }, 300);
  }
  cardsChosen = [];
  cardsChosenId = [];
  h1.innerHTML = "Score : " + cardsWon.length;

  if (cardsWon.length === cardArray.length / 2) {
    h1.classList.add("center");
    h1.innerHTML = "MUVAFFAQIYATLIK!";
    time = 0;
    timer.innerHTML = 0;
  }
}

cardBoard();
