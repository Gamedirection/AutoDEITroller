document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start');
  const stopBtn = document.getElementById('stop');
  const goToWebsiteBtn = document.getElementById('goToWebsite');
  const statusDiv = document.getElementById('status');

  // Initialize status from storage
  chrome.storage.local.get('isActive', (data) => {
      statusDiv.textContent = `Status: ${data.isActive ? 'Active' : 'Inactive'}`;
  });

  // Listen for storage changes
  chrome.storage.onChanged.addListener((changes) => {
      if (changes.isActive) {
          statusDiv.textContent = `Status: ${changes.isActive.newValue ? 'Active' : 'Inactive'}`;
      }
  });

  // Website navigation handler
  goToWebsiteBtn.addEventListener('click', () => {
      chrome.tabs.create({ url: 'https://enddei.ed.gov' });
  });

  // Start button handler
  startBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: "start" });
      chrome.storage.local.set({ isActive: true });
  });

  // Stop button handler
  stopBtn.addEventListener('click', () => {
      chrome.runtime.sendMessage({ action: "stop" });
      chrome.storage.local.set({ isActive: false });
  });

  // Progress animation (optional)
  let progress = 0;
  const progressBar = document.getElementById('progress');
  setInterval(() => {
      if (statusDiv.textContent.includes('Active')) {
          progress = (progress + 1) % 100;
          progressBar.style.width = `${progress}%`;
      }
  }, 100);
});