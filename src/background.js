chrome.runtime.onInstalled.addListener(() => {
  console.log("Leet AI Extension Installed");
});

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: injectH1Element,
//   });
// });

// function injectH1Element() {
//   const h1 = document.createElement("h1");
//   h1.textContent = "Injected Heading!";

//   const targetElement = document.querySelector("body");
//   if (targetElement) {
//     targetElement.insertAdjacentElement("beforeend", h1);
//   }
// }
