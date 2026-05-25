frappe.after_ajax(function () {
	// Run only on SIEPL-ERP Integrations page
	if (!window.location.pathname.includes("siepl-erp-integrations")) {
		return;
	}

	// Strong removal by visible text + href
	function hideBrowseApps() {
		document.querySelectorAll("a").forEach(el => {
			const text = el.innerText?.trim();
			const href = el.getAttribute("href") || "";

			if (
				text === "Browse Apps" ||
				href.includes("marketplace") ||
				href.includes("browse-apps")
			) {
				// Hide the entire row/container safely
				const row =
					el.closest(".card, .widget, .section, .col, .row, div") || el;
				row.style.setProperty("display", "none", "important");
			}
		});
	}

	// Run multiple times to beat async rendering
	hideBrowseApps();
	setTimeout(hideBrowseApps, 500);
	setTimeout(hideBrowseApps, 1500);
});
