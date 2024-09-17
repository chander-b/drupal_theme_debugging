document.addEventListener("DOMContentLoaded", function () {
  // Send message to background script to get stored templates
  chrome.runtime.sendMessage({ action: "get_templates" }, (response) => {
    const templateList = document.getElementById("twig-template-list");
    templateList.innerHTML = "";

    if (
      response &&
      response.twigTemplates &&
      response.twigTemplates.length > 0
    ) {
      response.twigTemplates.forEach((template) => {
        const listItem = document.createElement("li");
        listItem.textContent = template;
        templateList.appendChild(listItem);
      });
    } else {
      const noTemplatesItem = document.createElement("li");
      noTemplatesItem.textContent = "No Twig templates found on this page.";
      templateList.appendChild(noTemplatesItem);
    }
  });
});
