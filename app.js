let cookies = 0;
let cookieDisplay = document.getElementById("cookie-display");

const img = document.getElementById("img");

img.addEventListener("click", function (event) {
    cookies += 1

});

function game() {
    setInterval(function () {
        cookies += 1
        cookieDisplay.innerText = cookies
        // console.log("🍪", cookies);
    }, 1000) // 1000 milliseconds == 1 second
}
game()

const cookieCounter = localStorage.getItem("cookieCounter");
if (cookieCounter) {
    const input = document.querySelector("input");
    input.value = cookieCounter;
}




