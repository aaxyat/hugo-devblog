document.addEventListener("DOMContentLoaded", function () {
  // Find all <pre> elements on the page
  const preBlocks = document.querySelectorAll("pre");

  preBlocks.forEach(function (pre) {
    // Create the copy button
    const copyButton = document.createElement("button");
    copyButton.className = "code-copy-btn";
    copyButton.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
    copyButton.title = "Copy to clipboard";

    // Add the button to the <pre> element
    pre.appendChild(copyButton);
    pre.style.position = "relative";

    // Add click event
    copyButton.addEventListener("click", function () {
      // Get text to copy
      let code = pre.querySelector("code") || pre;
      let text = code.textContent;

      // Create a temporary textarea element to perform the copy
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed"; // Prevent scrolling to bottom
      document.body.appendChild(textarea);
      textarea.select();

      try {
        // Execute copy command
        document.execCommand("copy");

        // Visual feedback that copy was successful
        copyButton.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>';
        copyButton.classList.add("copied");

        // Reset button after 2 seconds
        setTimeout(function () {
          copyButton.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>';
          copyButton.classList.remove("copied");
        }, 2000);
      } catch (err) {
        console.error("Copy failed:", err);
      }

      // Remove the temporary textarea
      document.body.removeChild(textarea);
    });
  });
});
