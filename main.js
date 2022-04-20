const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const percentageButtons = document.querySelectorAll(".percentage");
const tipSpan = document.getElementById("total-tip-span");
const totalSpan = document.getElementById("total-bill-span");
const custom = document.getElementById("custom");
const noZero = document.getElementById("no-zero");
const reset = document.getElementById("reset");

let billValue = 0.0;
billInput.addEventListener("input", function () {
  billValue = billInput.value;
});

let peopleAmount = 0;
peopleInput.addEventListener("input", function () {
  peopleAmount = peopleInput.value;
});

function tipCalculation(percentageValue) {
  return billValue * peopleAmount * (percentageValue / 100);
}

function updateResult(percentageValue) {
  tipSpan.innerHTML = tipCalculation(percentageValue);
  totalSpan.innerHTML =
    tipCalculation(percentageValue) + billValue * peopleAmount;
}

percentageButtons.forEach(function (item, index) {
  item.onclick = function () {
    percentageButtons.forEach(function (_item, _index) {
      if (index !== _index) _item.classList.remove("active");
    });
    item.classList.add("active");
    if (peopleAmount < 1) {
      noZero.classList.remove("hidden");
    } else {
      noZero.classList.add("hidden");
      updateResult(item.getAttribute("data-value"));
    }
  };
});

custom.addEventListener("input", function () {
  updateResult(custom.value);
});

reset.onclick = function () {
  billInput.value = "";
  peopleInput.value = "";
  custom.value = "";
  tipSpan.innerHTML = "0.0";
  totalSpan.innerHTML = "0.0";
};
