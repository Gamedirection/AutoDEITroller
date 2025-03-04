document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const goToWebsiteBtn = document.getElementById('goToWebsite');
  const statusDiv = document.getElementById('status');

  // Handle "Go To Website" button click
  goToWebsiteBtn.addEventListener('click', () => {
    chrome.tabs.create({ url: 'https://enddei.ed.gov' });
  });

  // Handle "START" button click
  startBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "start" });
    statusDiv.textContent = "Status: Active";
  });

  // Handle "STOP" button click
  stopBtn.addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: "stop" });
    statusDiv.textContent = "Status: Inactive";
  });
});
