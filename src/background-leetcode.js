//background.js for open leetcode

chrome.runtime.onInstalled.addListener(() => {
  console.log("Leet AI Extension Installed");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Extension icon clicked!");

  if (message.action === "activate") {
    console.log("Opening LeetCode from popup");
    chrome.tabs.create({ url: "https://leetcode.com" });
  }
});
