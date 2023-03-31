const log_in_btn = document.querySelector("#login-in-btn");
const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

sign_in_btn.addEventListener('click', () => {
    container.classList.add("sign-in-mode");
});

log_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-in-mode");
});
