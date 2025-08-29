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
    // declaring variables
    const serviceSubname =
      callButton.parentNode.parentNode.querySelector(
        ".service-subname"
      ).innerText;
    const serviceNumber =
      callButton.parentNode.parentNode.querySelector(
        ".service-number"
      ).innerText;
    console.log(serviceNumber);
    const serviceName =
      callButton.parentNode.parentNode.querySelector(".service-name").innerText;
    const currentTime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    let navCoins = parseInt(getElement("nav-coins").innerText);
    if (navCoins >= 20) {
      let coinAfterDeduction = navCoins - 20;
      getElement("nav-coins").innerText = coinAfterDeduction;
      alert("Calling " + serviceSubname + " " + serviceNumber);
    } else {
      alert("Your don't have enough coins. Minimum 20 coins is needed to call");
      return;
    }
    const callHistoryContainer = getElement("call-history-container");
    const callHistory = document.createElement("div");
    callHistory.innerHTML = `
<div
              class="flex items-center justify-between p-4 bg-[#FAFAFA] rounded-[4px] mb-2"
            >
              <div>
                <h3 class="2xl:text-lg inter font-semibold text-[#111111]">
                  ${serviceName}
                </h3>
                <p class="2xl:text-lg text-[#5C5C5C] hind-madurai">${serviceNumber}</p>
              </div>
              <p class="whitespace-nowrap 2xl:text-lg text-[#111111] hind-madurai">${currentTime}</p>
            </div>
`;
    callHistoryContainer.appendChild(callHistory);
  });
}

// Clear button
const clearButton = getElement("clear-button").addEventListener(
  "click",
  function () {
    getElement("call-history-container").innerHTML = "";
  }
);

// Copy button section
const copyButtons = getElement1("copy-button");
for (const copyButton of copyButtons) {
  copyButton.addEventListener("click", async function () {
    const hotlineNumber =
      copyButton.parentNode.parentNode.querySelector(
        ".service-number"
      ).innerText;
    await navigator.clipboard.writeText(hotlineNumber);
    alert("Hotline number has been copied: " + hotlineNumber);
    let copyCount = parseInt(getElement("copy-count").innerText);
    copyCount += 1;
    getElement("copy-count").innerText = copyCount;
  });
}
