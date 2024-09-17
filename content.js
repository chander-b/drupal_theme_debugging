(function () {
  const twigTemplateMatches = [];

  // Look for Twig file name suggestions in the HTML
  const nodes = document.querySelectorAll("*");

  nodes.forEach((node) => {
    const nodeContent = node.innerHTML || "";

    // Match the FILE NAME SUGGESTIONS block in the comment
    const twigCommentRegex = /<!-- FILE NAME SUGGESTIONS:([\s\S]*?)-->/g;
    let matches = twigCommentRegex.exec(nodeContent);

    if (matches) {
      // Extract each line from the matched block
      const suggestionLines = matches[1].split("\n");

      suggestionLines.forEach((line) => {
        // Match valid template lines (those that start with an asterisk *)
        const templateMatch = line.match(
          /\*\s*([a-zA-Z0-9_\-\/]+\.html\.twig)/
        );
        if (templateMatch && templateMatch[1]) {
          twigTemplateMatches.push(templateMatch[1].trim());
        }
      });
    }
  });

  // Send found templates to the background script
  chrome.runtime.sendMessage(
    { twigTemplates: twigTemplateMatches },
    (response) => {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError);
      } else {
        console.log("Background script acknowledged:", response.status);
      }
    }
  );

  console.log("Twig templates found:", twigTemplateMatches);
})();
