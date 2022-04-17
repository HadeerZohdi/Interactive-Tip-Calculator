const billInput = document.getElementById("bill-input");
const peopleInput = document.getElementById("people-input");
const tipButtons = document.querySelectorAll(".percentage");
const tipSpan = document.getElementById("total-tip-span");
const totalSpan = document.getElementById("total-bill-span");
const customTip = document.getElementById("custom");
const resetButton = document.getElementById("reset");

let billValue = 0.0;
billInput.addEventListener("input", function () {
  billValue = billInput.value;
});

let peopleAmount = 0;
peopleInput.addEventListener("input", function () {
  peopleAmount = peopleInput.value;
});

function calculateTip(percantage) {
  return billValue * peopleAmount * (percantage / 100);
}

function updateResults(PercentageValue) {
  tipSpan.innerHTML = calculateTip(PercentageValue);
  totalSpan.innerHTML =
    calculateTip(PercentageValue) + +billValue * peopleAmount;
}

tipButtons.forEach(function (item, index) {
  item.onclick = function (e) {
    tipButtons.forEach(function (_item, _index) {
      if (index !== _index) _item.classList.remove("active");
    });
    item.classList.add("active");
    if (peopleAmount < 1) {
      document.getElementById("no-zero").classList.remove("hidden");
    } else {
      updateResults(e.target.getAttribute("data-value"));
      document.getElementById("no-zero").classList.add("hidden");
    }
  };
});

customTip.addEventListener("input", function (event) {
  updateResults(event.target.value);
});

resetButton.addEventListener("click", function () {
  tipSpan.innerHTML = "0.0";
  totalSpan.innerHTML = "0.0";
  billInput.value = "";
  peopleInput.value = "";
});
