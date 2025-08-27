// Reusable function to get element by ID
function getElement(id) {
  return document.getElementById(id);
}
// Reusable function to get element by classname
function getElement1(classname) {
  return document.getElementsByClassName(classname);
}
// (4) Functionalities, clicking heart icons increases heart count ✅
const cardHearts = getElement1("card-heart-icon");
for (const cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    let navHeartCount = parseInt(getElement("nav-heart-count").innerText);
    navHeartCount += 1;
    getElement("nav-heart-count").innerText = navHeartCount;
  });
}
// (5) Call button task
// (5.1, 5.2 showing alert, points deduction)
const callButtons = getElement1("call-button");
for (const callButton of callButtons) {
  callButton.addEventListener("click", function () {
    const serviceName =
      callButton.parentNode.parentNode.querySelector(".service-name").innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.querySelector(
        ".service-number"
      ).innerText;
    let navCoins = parseInt(getElement("nav-coins").innerText);
    if (navCoins >= 20) {
      let coinAfterDeduction = navCoins - 20;
      getElement("nav-coins").innerText = coinAfterDeduction;
      alert("Calling " + serviceName + " " + serviceNumber);
    } else {
      alert("Your don't have enough coins. Minimum 20 coins is needed to call");
      return;
    }
  });
}

// (5.2, cutting 20 coins)
