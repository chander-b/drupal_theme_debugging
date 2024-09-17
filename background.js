let twigTemplates = [];

// Handle both content script messages and popup messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.twigTemplates) {
    twigTemplates = request.twigTemplates;
    console.log("Received templates from content script:", twigTemplates);
    sendResponse({ status: "Templates received" });
  }

  // Handle messages from popup
  if (request.action === "get_templates") {
    console.log("Popup requested templates, sending:", twigTemplates);
    sendResponse({ twigTemplates });
  }
  return true;
});
