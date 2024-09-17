document
  .getElementById("randomButton")
  .addEventListener("click", function randomCardGenerator() {
    document.querySelector(".rank").innerHTML = generateRandomRank();
    generateRandomSuit();
  });

let generateRandomRank = () => {
  let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomRank = Math.floor(Math.random() * rank.length);
  return rank[randomRank];
};

let generateRandomSuit = () => {
  let suit = ["♦", "♣", "♥", "♠"];
  let randomSuit = Math.floor(Math.random() * suit.length);
  if (suit[randomSuit] === "♥" || suit[randomSuit] === "♦") {
    document.querySelector(".top").style.color = "red";
    document.querySelector(".rank").style.color = "red";
    document.querySelector(".bottom").style.color = "red";
  } else {
    document.querySelector(".top").style.color = "black";
    document.querySelector(".rank").style.color = "black";
    document.querySelector(".bottom").style.color = "black";
  }
  document.querySelector(".top").innerHTML = suit[randomSuit];
  document.querySelector(".bottom").innerHTML = suit[randomSuit];
};
