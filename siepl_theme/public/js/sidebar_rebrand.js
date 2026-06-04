
function rebrand() {
    // Sidebar subtitle
    frappe.app.sidebar.header_subtitle = "SIEPL ERP";
    $(".header-subtitle").text("SIEPL ERP");

    // Remove ERPNext Integrations sidebar item
    $(".sidebar-item-label").each(function () {
        if ($(this).text().trim() === "ERPNext Integrations") {
            $(this).closest(".sidebar-item").remove();
        }
    });

    // Replace all text nodes
    $("*").contents().filter(function () {
        return this.nodeType === 3;
    }).each(function () {
        let text = this.nodeValue;
        if (text.includes("ERPNext") || text.includes("Frappe")) {
            this.nodeValue = text
                .replaceAll("ERPNext Integrations", "SIEPL ERP Integrations")
                .replaceAll("ERPNext", "SIEPL ERP")
                .replaceAll("Frappe Cloud", "SIEPL ERP Cloud")
                .replaceAll("Frappe", "SIEPL ERP")
                .replaceAll("Powered by Frappe", "Powered by SIEPL ERP");
        }
    });
    

    // Page title
    document.title = document.title
        .replaceAll("ERPNext", "SIEPL ERP")
        .replaceAll("Frappe", "SIEPL ERP");
}

// Initial load
setTimeout(rebrand, 500);

// Every navigation
$(document).on("page-change", function () {
    setTimeout(rebrand, 300);
});
$(document).on("click", function () {
    setTimeout(function () {
        $(".menu-item-title").each(function () {
            let text = $(this).text();
            if (text.trim() === "About") {
               $(this).closest(".dropdown-menu-item").hide();
            }
            if (text.includes("Frappe") || text.includes("ERPNext")) {
                $(this).text(
                    text
                        .replaceAll("Frappe", "SIEPL ERP")
                        .replaceAll("ERPNext", "SIEPL ERP")
                );
            }
        });
    }, 100);
});