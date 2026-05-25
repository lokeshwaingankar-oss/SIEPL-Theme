document.addEventListener("DOMContentLoaded", function () {
    const wrapper = document.querySelector(".login-wrapper");

    if (wrapper && !document.querySelector("#login-wrapper")) {

        wrapper.id = "login-wrapper";

        wrapper.innerHTML = `
            <div class="login-left-panel"></div>
            <div class="login-right-panel">${wrapper.innerHTML}</div>
        `;
    }

    // Update login heading
    const title = document.querySelector(".login-content h2");
    if (title) {
        title.innerHTML = "Login to <b>SIEPL-ERP</b>";
        title.classList.add("login-heading");
    }
});
