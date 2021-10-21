/*---------------Managing values in form-----------------*/

var plans = document.querySelectorAll("#plan");
var planSelectors = document.querySelectorAll("#plan-selector");
var amountLeft = document.querySelectorAll("#amount-left");
var payButtons = document.querySelectorAll("#pay");
var amountToPledge = document.querySelectorAll("#amount-to-pledge");
var backers = document.querySelector("#backers");
var collectedMoney = document.querySelector("#money");
var mpPlans = document.querySelectorAll("#main-page-plan");
var payNRButton = document.querySelector("#pay-no-reward");
var progressBar = document.querySelector("#progress-tracker");
var hasBacked = false;
var money = 89914;
let index;

planSelectors.forEach((selector) =>
  selector.addEventListener("click", () => {
    for (i = 0; i < planSelectors.length; i++) {
      if (selector === planSelectors[i]) {
        plans[i].classList.remove("collapsed");
        plans[i].style.borderColor = "var(--progress-tracker-and-pledge-color)";
        index = i;
      } else {
        planSelectors[i].checked = false;
        plans[i].classList.add("collapsed");
        plans[i].style.borderColor = "var(--border-color)";
      }
    }
  })
);

function PresetValue(psIndex) {
  plans[psIndex].classList.remove("collapsed");
  plans[psIndex].style.borderColor = "var(--progress-tracker-and-pledge-color)";
  planSelectors[psIndex].checked = true;
  index = psIndex;
}

payButtons.forEach((payButton) =>
  payButton.addEventListener("click", () => {
    localStorage.setItem("backers", `5,008`);
    localStorage.setItem("backed", true);
    localStorage.setItem(
      "amount" + index,
      `${parseInt(amountLeft[index + 2].innerHTML) - 1}`
    );
    localStorage.setItem(
      "money",
      `${money + parseInt(amountToPledge[index].value)}`
    );

    if (localStorage.getItem("amount" + index) === 0) {
      mpPlans[index - 1].classList.add("out-of-stock");
    }
  })
);

payNRButton.addEventListener("click", () => {
  localStorage.setItem("money", `${money + parseInt(amountToPledge[0].value)}`);
});

function FormatMoney(moneyToFormat) {
  strMoney = (Math.min(100000, moneyToFormat) / 1000).toFixed(3).toString();
  return strMoney.replace(".", ",");
}

/*---------------Load Values-----------------*/

window.addEventListener("DOMContentLoaded", () => {
  localStorage.getItem("amount1")
    ? (amountLeft[0].innerHTML = localStorage.getItem("amount1"))
    : 101;
  localStorage.getItem("amount1")
    ? (amountLeft[3].innerHTML = localStorage.getItem("amount1"))
    : 101;

  if (localStorage.getItem("amount1") == 0) {
    plans[1].classList.add("out-of-stock");
    mpPlans[0].classList.add("out-of-stock");
  }

  localStorage.getItem("amount2")
    ? (amountLeft[1].innerHTML = localStorage.getItem("amount2"))
    : 64;
  localStorage.getItem("amount2")
    ? (amountLeft[4].innerHTML = localStorage.getItem("amount2"))
    : 64;

  if (localStorage.getItem("amount2") == 0) {
    plans[2].classList.add("out-of-stock");
    mpPlans[1].classList.add("out-of-stock");
  }

  localStorage.getItem("amount3")
    ? (amountLeft[2].innerHTML = localStorage.getItem("amount3"))
    : 1;
  localStorage.getItem("amount3")
    ? (amountLeft[5].innerHTML = localStorage.getItem("amount3"))
    : 1;

  if (localStorage.getItem("amount3") == 0) {
    plans[3].classList.add("out-of-stock");
    mpPlans[2].classList.add("out-of-stock");
  }

  localStorage.getItem("backers")
    ? (backers.innerHTML = localStorage.getItem("backers"))
    : "5,007";
  localStorage.getItem("backed")
    ? (hasBacked = localStorage.getItem("backed"))
    : false;
  localStorage.getItem("money")
    ? (collectedMoney.innerHTML =
        "$" + FormatMoney(localStorage.getItem("money")))
    : "$" + FormatMoney(money);
  localStorage.getItem("money")
    ? (money = localStorage.getItem("money"))
    : money;

  if (hasBacked) thanksForm.classList.toggle("closed");
  progressBar.setAttribute("style", "width:" + parseInt(money / 1000) + "%;");
});

/*---------------Day counter-----------------*/

var uploadedOn = new Date("Oct 20, 2021").getTime();
var now = new Date().getTime();
var daysLeft = document.getElementById("days-left");

daysLeft.innerHTML =
  56 - Math.min(56, parseInt((now - uploadedOn) / (1000 * 60 * 60 * 24)));
