// figma design - https://www.figma.com/file/KHeCZrAECAgrWRk09JJg5F/Basketball-Scoreboard-(Copy)?type=design&node-id=0-1&mode=design&t=g0klVqEvCGRuAOac-0

let addOnePointToHomeBtn = document.getElementById("add-home-score-btn1");
let homeScoreCount = document.getElementById("home-count");
let homeScore = 0;

let addTwoPointToHomeBtn = document.getElementById("add-home-score-btn2");
let homeCount = document.getElementById("home-count");

let addThreePointToHomeBtn = document.getElementById("add-home-score-btn3");
let homeNumber = document.getElementById("home-count");

function plus1() {
  homeScore += 1;
  homeScoreCount.innerText = homeScore;
}

function plus2() {
  homeScore += 2;
  homeScoreCount.innerText = homeScore;
}

function plus3() {
  homeScore += 3;
  homeScoreCount.innerText = homeScore;
}

let addOnePointToGuestBtn = document.getElementById("add-guest-score-btn1");
let guestScoreCount = document.getElementById("guest-count");
let guestScore = 0;

let addTwoPointToGuestBtn = document.getElementById(
  "add-guest-count-score-btn2"
);
let guestCount = document.getElementById("guest-count");

let addThreePointToGuestBtn = document.getElementById(
  "add-guest-count-score-btn3"
);
let guestNumber = document.getElementById("guest-count");

function add1() {
  guestScore += 1;
  guestScoreCount.innerText = guestScore;
}

function add2() {
  guestScore += 2;
  guestScoreCount.innerText = guestScore;
}

function add3() {
  guestScore += 3;
  guestScoreCount.innerText = guestScore;
}
