let input = document.querySelector(".ivu-input");
const res = await fetch(
  "https://api.stackexchange.com/2.3/users/16648127?order=desc&sort=reputation&site=stackoverflow"
);
const data = await res.json();

const reputation = data.items[0].reputation;

const str = input.value;

const match = RegExp("声望").exec(str);
const match2 = RegExp("点").exec(str);

const index = match.index;
const index2 = match2.index;

const newOne =
  str.slice(0, index) +
  "声望" +
  reputation +
  "点" +
  str.slice(index2 + 1, str.length);

input.value = newOne;

// edit number

let submit = document.querySelector(".zp-evalution-edit-btn__sure");

submit.click();
