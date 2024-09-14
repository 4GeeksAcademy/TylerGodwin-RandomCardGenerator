window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML = generateRandomRank();
};

let generateRandomRank = () => {
  let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomRank = Math.floor(Math.random() * rank.length);
  return rank[randomRank];
};

let generateRandomSuit = () => {
  let suit = ["spade", "heart", "club", "diamond"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  return suit[randomSuit];
};
