// Remove ERPNext Integrations sidebar entry (production-safe)
(function () {
    function removeERPNextIntegrations() {
        document.querySelectorAll(".sidebar-item-label").forEach(el => {
            if (el.textContent.trim() === "ERPNext Integrations") {
                // Remove the entire sidebar item
                const sidebarItem = el.closest(".sidebar-item");
                if (sidebarItem) {
                    sidebarItem.remove();
                }
            }
        });
    }

    // Run immediately
    removeERPNextIntegrations();

    // Observe dynamic sidebar re-renders
    const observer = new MutationObserver(removeERPNextIntegrations);
    observer.observe(document.body, { childList: true, subtree: true });
})();

