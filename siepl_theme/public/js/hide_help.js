// ✅ HIDE HELP BUTTON (DO NOT REMOVE FROM DOM)
(function () {
    function hideHelp() {
        // Hide by text
        document.querySelectorAll("a, span, div").forEach(el => {
            if (el.innerText && el.innerText.trim() === "Help") {
                el.style.display = "none";
            }
        });

        // Hide by aria-label
        document.querySelectorAll('[aria-label="Help"]').forEach(el => {
            el.style.display = "none";
        });

        // Hide toolbar item
        document.querySelectorAll(".toolbar-item").forEach(el => {
            if (el.innerText && el.innerText.includes("Help")) {
                el.style.display = "none";
            }
        });
    }

    // Run multiple times to catch reloads
    hideHelp();
    setTimeout(hideHelp, 1000);
    setTimeout(hideHelp, 3000);
    setInterval(hideHelp, 5000);
})();
