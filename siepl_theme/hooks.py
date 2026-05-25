app_name = "siepl_theme"
app_title = "SIEPL ERP Theme"
app_publisher = "SIEPL"
app_description = "Custom UI theme for SIEPL ERP"
app_email = "sieplinc@gmail.com"
app_license = "mit"

# Load theme CSS & JS
app_include_css = [
    "/assets/siepl_theme/css/siepl_theme.css",
    "/assets/siepl_theme/css/custom_login.css"
]
fixtures = [
    {
        "dt": "Website Theme",
    }
]

app_include_js = [
#    "/assets/siepl_theme/js/custom_login.js",
    "/assets/siepl_theme/js/sidebar_rebrand.js",
    "/assets/siepl_theme/js/hide_browse_apps.js",
    "/assets/siepl_theme/js/hide_help.js"
]
# Enable translations (optional)
translate = "siepl_theme.locale"

# ✅ Override Website Footer
jinja = {
    "methods": [],
    "filters": []
}

override_templates = {
    "frappe/templates/includes/login/login.html":
        "siepl_theme/templates/overrides/login.html"
}

override_whitelisted_methods = {
    "frappe.www.login.get_context": "siepl_theme.overrides.login.get_context"
}


